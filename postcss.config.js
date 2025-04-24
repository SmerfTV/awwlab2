{
    "name": "strona-awww",
    "version": "1.0.0",
    "description": "Strona o kotach rasy Ragdoll z Tailwind CSS",
    "scripts": {
      "dev:css": "cross-env NODE_ENV=development postcss src/input.css -o public/output.css --watch",
      "build:css": "cross-env NODE_ENV=production postcss src/input.css -o public/output.css"
    },
    "devDependencies": {
      "autoprefixer": "^10.0.0",
      "cssnano": "^5.0.0",
      "cross-env": "^7.0.3",
      "postcss": "^8.0.0",
      "postcss-cli": "^10.0.0",
      "@tailwindcss/postcss": "^1.0.0",
      "tailwindcss": "^4.1.4"
    }
  }
  