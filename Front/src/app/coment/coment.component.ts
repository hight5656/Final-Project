import { CommonModule } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './coment.component.html',
  styleUrl: './coment.component.css'
})


export class ComentComponent implements OnInit {
  comments: string[] = [];
  newComment: string = '';

  // Слова, які мають бути замінені
  forbiddenWords: string[] = ['кокос', 'банан', 'плохой'];

  // Список імен для генерації випадкових імен
  names: string[] = ['Іван', 'Ольга', 'Петро', 'Марія', 'Сергій', 'Наталія', 'Михайло', 'Катерина'];

  constructor() {}

  ngOnInit(): void {
    this.loadComments();
  }

  // Функція для вибору випадкового імені зі списку
  getRandomName(): string {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    return this.names[randomIndex];
  }

  // Заміна слів та символу @ на *
  sanitizeComment(comment: string): string {
    let sanitizedComment = comment;

    // Заміна заборонених слів
    this.forbiddenWords.forEach((word) => {
      const regex = new RegExp(word, 'gi');
      sanitizedComment = sanitizedComment.replace(regex, '*'.repeat(word.length));
    });

    // Заміна символу '@' на '*'
    sanitizedComment = sanitizedComment.replace(/@/g, '*');

    return sanitizedComment;
  }

  // Додавання нового коментаря
  addComment(): void {
    if (this.newComment.trim()) {
      const sanitizedComment = this.sanitizeComment(this.newComment.trim());
      const randomName = this.getRandomName();
      const commentWithAuthor = `${randomName}: ${sanitizedComment}`; // Додаємо ім'я перед коментарем
      this.comments.push(commentWithAuthor);
      this.saveComments();
      this.newComment = ''; // Очищуємо поле для вводу після додавання
    }
  }

  // Збереження коментарів в localStorage
  saveComments(): void {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  // Завантаження коментарів з localStorage
  loadComments(): void {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      this.comments = JSON.parse(savedComments);
    }
  }
}