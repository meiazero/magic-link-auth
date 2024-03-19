# magic link authentication
> An example of how to use magic link authentication in a Next.js app.

## Prerequisites
- [Node.js](https://nodejs.org/en)
- package manager (npm, yarn, pnpm or bun)
> I used [bun](https://bun.sh) in this project.

## Getting Started
1. Clone the repository
```bash
git clone https://github.com/meiazero/magic-link-auth && cd magic-link-auth
```

2. Install dependencies
```bash
bun install
```

3. Create a `.env` file in the root of the project copy the content of `.env.example` and replace the values with your own.
> to get the `RESEND_API_KEY` you need acess the [Resend Dashboard](https://resend.com/api-keys)

4. Run the development server
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Typescript](https://www.typescriptlang.org)
- [shadcn-ui](https://ui.shadcn.com)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
