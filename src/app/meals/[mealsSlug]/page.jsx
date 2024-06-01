import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

/**
 * 동적으로 메타데이터 추가하기.
 * Next js가 `generateMetadata`의 이름을 가진 함수를 찾기 때문에
 * 함수명은 항상 generateMetadata로 고정.
 * 
 * @returns {} metadata 객체
 */
export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealsSlug);
  
  if (!meal) {
    notFound();
  }
  
  return {
    title: meal.title,
    description: meal.summary
  }
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealsSlug);
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}