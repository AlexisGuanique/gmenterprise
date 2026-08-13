"use client";

import { useCallback, useState } from "react";
import type { AcademyCourse } from "@/data/academy";
import { academyContent } from "@/data/academy";
import { AcademyCourseCard } from "@/components/academy/AcademyCourseCard";
import { AcademyEnrollModal } from "@/components/academy/AcademyEnrollModal";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function AcademyCoursesGrid() {
  const { catalog, courses } = academyContent;
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(
    null,
  );

  const closeModal = useCallback(() => setSelectedCourse(null), []);

  return (
    <>
      <section
        id="courses"
        className="academy-courses section-padding scroll-mt-28"
        aria-labelledby="academy-courses-title"
      >
        <div className="academy-courses__inner mx-auto max-w-7xl">
          <header className="academy-courses__header">
            <h2 id="academy-courses-title" className="academy-courses__title">
              {catalog.title}
            </h2>
            <p className="academy-courses__subtitle">{catalog.subtitle}</p>
          </header>
          <div className="academy-courses__grid">
            {courses.map((course, index) => (
              <AnimateOnScroll
                key={course.id}
                delay={index * 80}
                variant="scale-in"
                className="h-full"
              >
                <AcademyCourseCard
                  course={course}
                  onEnroll={setSelectedCourse}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AcademyEnrollModal
        course={selectedCourse}
        open={Boolean(selectedCourse)}
        onClose={closeModal}
      />
    </>
  );
}
