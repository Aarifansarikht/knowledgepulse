// types.ts

export type Category = {
  id: string
  name: string
  icon: string
  coursesCount: number
}

export type Lesson = {
  id: string
  title: string
  duration: string
  videoUrl: string
}

export type Module = {
  id: string
  title: string
  lessons: Lesson[]
}

export type Course = {
  id: string
  title: string
  instructor: string
  rating: number
  reviewsCount: number
  price: number
  originalPrice: number
  image: string
  category: string
  level: string
  duration: string
  lessonsCount: number
  description: string
  learningObjectives: string[]
  requirements: string[]
  modules: Module[]
}

export type Testimonial = {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}