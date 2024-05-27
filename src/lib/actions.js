'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from './meals';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meal); // saveMeal 함수가 실행되어 meal 데이터가 저장
  revalidatePath('/meals'); // '/meals' 페이지를 재검증해 새로 저장된 meal 데이터를 적용
  redirect('/meals'); // 새로운 meal 데이터가 적용된 '/meals' 페이지로 리다이렉트
}