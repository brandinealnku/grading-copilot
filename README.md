# ITSBAD Grading Copilot

Private faculty workflow for reviewing proposed grades and feedback before posting approved results to Canvas.

## v0.1 safety model
- Canvas token is server-side only.
- Writes are disabled by default with CANVAS_WRITE_ENABLED=false.
- No student submissions, grades, names, or credentials belong in Git.
- Review is required before posting.

## Local setup
1. Copy .env.example to .env.local.
2. Set CANVAS_ACCESS_TOKEN locally. Never commit it.
3. npm install
4. npm run dev

Canvas base URL defaults to https://nku.instructure.com.
