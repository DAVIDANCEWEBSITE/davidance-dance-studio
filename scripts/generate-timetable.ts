import { writeFileSync } from "node:fs";
import { siteConfig, styles } from "../src/data/siteConfig";
const esc = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const entries = days.map((day) =>
  styles
    .flatMap((s) =>
      (s.levels ?? [{ name: "", schedule: s.schedule }]).flatMap((level) =>
        level.schedule
          .filter((t) => t.day.replace(/s$/, "") === day)
          .map((t) => ({ name: s.name, level: level.name, time: t.time, age: s.ageRange })),
      ),
    )
    .sort((a, b) => a.time.localeCompare(b.time)),
);
const primary = "#96305a",
  foreground = "#352632",
  background = "#ffffff",
  muted = "#66515f",
  secondary = "#f9edf2",
  border = "#e9d7e0";
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1150" viewBox="0 0 1400 1150"><rect width="1400" height="1150" fill="${background}"/><style>text{font-family:Montserrat,Arial,sans-serif} .title{font-size:36px;font-weight:600;fill:${foreground}} .day{font-size:23px;font-weight:600;fill:${background}} .name{font-size:17px;font-weight:600;fill:${foreground}} .time{font-size:17px;fill:${primary}} .detail{font-size:14px;fill:${muted}}</style><text x="48" y="66" class="title">DAVIDANCE · ${esc(siteConfig.copy.timetableTitle)}</text><text x="48" y="102" class="detail">${esc(siteConfig.contacts.address)}</text>`;
for (let col = 0; col < days.length; col++) {
  const x = 48 + col * 263;
  svg += `<rect x="${x}" y="138" width="252" height="52" rx="6" fill="${primary}"/><text x="${x + 16}" y="173" class="day">${days[col]}</text>`;
  entries[col]?.forEach((e, i) => {
    const y = 204 + i * 108;
    svg += `<rect x="${x}" y="${y}" width="252" height="98" rx="6" fill="${secondary}" stroke="${border}"/><text x="${x + 14}" y="${y + 27}" class="name">${esc(e.name)}</text><text x="${x + 14}" y="${y + 53}" class="time">${esc(e.time)}</text><text x="${x + 14}" y="${y + 78}" class="detail">${esc(e.level || e.age)}${e.level === "Nível II" ? " · autorização prévia" : ""}</text>`;
  });
}
svg += `<text x="48" y="1078" class="detail">Nível II: experiência e inscrição mediante autorização prévia dos professores.</text><text x="48" y="1110" class="detail">${esc(siteConfig.contacts.phone)} · ${esc(siteConfig.contacts.email)}</text></svg>`;
writeFileSync("public/horario-davidance.svg", svg);
