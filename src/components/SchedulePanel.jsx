import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { scheduleByDay, weekdays } from "../data/schedule";
import React from "react";

export function SchedulePanel({ compact = false }) {
  const [activeDay, setActiveDay] = useState("周一");

  return (
    <section className={compact ? "schedule-panel compact" : "schedule-panel"} id="schedule" aria-label="更新时间表">
      <div className="panel-title">
        <CalendarDays size={19} aria-hidden="true" />
        <h2>更新表</h2>
      </div>
      <div className="weekday-tabs" role="tablist" aria-label="选择星期">
        {weekdays.map((day) => (
          <button
            className={day === activeDay ? "weekday-tab active" : "weekday-tab"}
            type="button"
            onClick={() => setActiveDay(day)}
            aria-selected={day === activeDay}
            role="tab"
            key={day}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="schedule-list">
        {scheduleByDay[activeDay].map(([title, time]) => (
          <a href="#" className="schedule-item" key={`${activeDay}-${title}`}>
            <span>{activeDay}</span>
            <strong>{title}</strong>
            <em>{time}</em>
          </a>
        ))}
      </div>
    </section>
  );
}
