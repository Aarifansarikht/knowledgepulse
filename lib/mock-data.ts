import { Course, Category, Testimonial } from './types';

export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Design', icon: 'Palette', coursesCount: 120 },
  { id: '2', name: 'Development', icon: 'Code', coursesCount: 250 },
  { id: '3', name: 'Business', icon: 'Briefcase', coursesCount: 85 },
  { id: '4', name: 'Marketing', icon: 'Megaphone', coursesCount: 110 },
  { id: '5', name: 'Data Science', icon: 'Database', coursesCount: 95 },
  { id: '6', name: 'Photography', icon: 'Camera', coursesCount: 60 },
  { id: '7', name: 'Music', icon: 'Music', coursesCount: 45 },
  { id: '8', name: 'Health', icon: 'Heart', coursesCount: 75 },
];

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Mastering C Programming from Scratch',
    instructor: 'Ananya Sharma',
    rating: 4.8,
    reviewsCount: 12500,
    price: 49.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60',
    category: 'Development',
    level: 'Beginner',
    duration: '20h 30m',
    lessonsCount: 45,
    description: 'Learn the foundations of computer science with C. This course covers everything from variables to pointers and memory management.',
    learningObjectives: [
      'Understand C syntax and structure',
      'Master pointers and memory management',
      'Build real-world applications in C',
      'Prepare for advanced systems programming'
    ],
    requirements: [
      'No prior programming experience required',
      'A computer with Windows, macOS, or Linux'
    ],
    modules: [
      {
        id: 'm1',
        title: 'Introduction to C',
        lessons: [
          { id: 'l1', title: 'Setting up the Environment', duration: '10:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
          { id: 'l2', title: 'Your First C Program', duration: '15:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
      },
      {
        id: 'm2',
        title: 'Variables and Data Types',
        lessons: [
          { id: 'l3', title: 'Understanding Integers and Floats', duration: '12:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
          { id: 'l4', title: 'Constants and Enums', duration: '08:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'C++ Masterclass: Object Oriented Programming',
    instructor: 'Rahul Verma',
    rating: 4.9,
    reviewsCount: 8400,
    price: 59.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60',
    category: 'Development',
    level: 'Intermediate',
    duration: '35h 15m',
    lessonsCount: 85,
    description: 'Master C++ and Object Oriented Programming. Learn classes, inheritance, polymorphism, and the Standard Template Library (STL).',
    learningObjectives: [
      'Master C++ syntax and OOP concepts',
      'Understand templates and STL',
      'Build high-performance applications',
      'Learn modern C++ features (C++11/14/17/20)'
    ],
    requirements: [
      'Basic understanding of programming logic',
      'C++ compiler installed'
    ],
    modules: [
      {
        id: 'm1',
        title: 'Getting Started with C++',
        lessons: [
          { id: 'l1', title: 'C++ vs C: The Key Differences', duration: '12:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
          { id: 'l2', title: 'Classes and Objects', duration: '20:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Java Programming: From Zero to Hero',
    instructor: 'Priya Iyer',
    rating: 4.7,
    reviewsCount: 15200,
    price: 69.99,
    originalPrice: 139.99,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
    category: 'Development',
    level: 'Beginner',
    duration: '45h 45m',
    lessonsCount: 110,
    description: 'The most comprehensive Java course. Learn Java 17, Spring Boot, and Hibernate to become a professional Java developer.',
    learningObjectives: [
      'Master Java 17 features',
      'Build enterprise applications with Spring Boot',
      'Understand JVM internals',
      'Write clean, maintainable Java code'
    ],
    requirements: [
      'No prior Java knowledge needed',
      'JDK 17 installed'
    ],
    modules: [
      {
        id: 'm1',
        title: 'Java Fundamentals',
        lessons: [
          { id: 'l1', title: 'Introduction to Java', duration: '15:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
          { id: 'l2', title: 'Setting up IntelliJ IDEA', duration: '10:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Python for Data Science and AI',
    instructor: 'Vikram Malhotra',
    rating: 4.6,
    reviewsCount: 5600,
    price: 54.99,
    originalPrice: 109.99,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60',
    category: 'Development',
    level: 'Beginner',
    duration: '30h 20m',
    lessonsCount: 75,
    description: 'Learn Python for data analysis, visualization, and machine learning. Use libraries like NumPy, Pandas, and Scikit-Learn.',
    learningObjectives: [
      'Master Python for data science',
      'Analyze data with Pandas',
      'Build machine learning models',
      'Automate tasks with Python'
    ],
    requirements: [
      'Basic math knowledge',
      'Python and Jupyter Notebook installed'
    ],
    modules: [
      {
        id: 'm1',
        title: 'Python Basics',
        lessons: [
          { id: 'l1', title: 'Why Python for Data Science?', duration: '08:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
          { id: 'l2', title: 'Python Lists and Dictionaries', duration: '15:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
      }
    ]
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Siddharth Gupta',
    role: 'Software Engineer at TCS',
    avatar: 'https://i.pravatar.cc/150?u=siddharth',
    content: 'KnowledgePulse has completely transformed the way I learn. The courses are top-notch and the community is incredibly supportive. I landed my dream job thanks to the skills I gained here.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Aditi Rao',
    role: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/150?u=aditi',
    content: 'The quality of instruction on KnowledgePulse is unmatched. I\'ve tried many platforms, but this one stands out for its practical, project-based approach. Highly recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ishaan Malhotra',
    role: 'Data Analyst',
    avatar: 'https://i.pravatar.cc/150?u=ishaan',
    content: 'I love the community aspect of KnowledgePulse. Being able to connect with other learners and experts has been invaluable for my professional growth.',
    rating: 4,
  },
];
