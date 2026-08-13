"use client";

import type { AcademyCourse } from "@/data/academy";
import { Button } from "@/components/shared/Button";

type AcademyCourseCardProps = {
  course: AcademyCourse;
  onEnroll: (course: AcademyCourse) => void;
};

export function AcademyCourseCard({ course, onEnroll }: AcademyCourseCardProps) {
  return (
    <article
      className={`academy-card anim-card-shine anim-card-lift ${course.highlighted ? "academy-card--highlighted" : ""}`}
    >
      {course.badge ? (
        <span className="academy-card__badge">{course.badge}</span>
      ) : null}

      <div className="academy-card__content">
        <h3 className="academy-card__name">{course.name}</h3>
        <p className="academy-card__desc">{course.description}</p>

        <div className="academy-card__prices">
          <p className="academy-card__price">{course.price}</p>
          <p className="academy-card__price-label">{course.priceLabel}</p>
          <p className="academy-card__billing">{course.billingNote}</p>
        </div>
      </div>

      <div className="academy-card__footer">
        <Button
          type="button"
          variant={course.highlighted ? "gold" : "primary"}
          className="academy-card__cta w-full"
          onClick={() => onEnroll(course)}
        >
          {course.cta.label}
        </Button>
      </div>
    </article>
  );
}
