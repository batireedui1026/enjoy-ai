"use client";
import { LockKeyhole } from "lucide-react";

const Closed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="relative w-24 h-24 bg-card border-2 border-primary/20 rounded-full flex items-center justify-center shadow-lg">
            <LockKeyhole className="w-12 h-12 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight text-balance">
            Бүртгэл хаагдсан байна
          </h1>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
          Уучлаарай, бүртгэлийн хугацаа дууссан байна. Хэрэв асуух зүйл байвал
          бидэнтэй холбогдоно уу.
        </p>

        <div className="pt-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
          >
            Нүүр хуудас руу буцах
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="pt-8 text-sm text-muted-foreground">
          <p>Асуулт байвал манай багтай холбогдоорой</p>
        </div>
      </div>
    </div>
  );
};

export default Closed;
