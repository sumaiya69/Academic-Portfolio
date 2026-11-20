# Sumaiya: Academic Homepage

Personal academic website of **Sumaiya**, Ph.D. candidate in Computer Science at Wayne State University.

Live site: https://sumaiya69.github.io/Academic-Portfolio/

## Structure

```
index.html          All page content (one file, organized by section)
css/styles.css      All styles (colors and fonts are variables at the top)
js/main.js          Mobile menu and active-section highlighting (no dependencies)
CV.pdf              Curriculum vitae linked from the site
images/profile.jpg  Optional headshot (if missing, an "S" monogram is shown)
libs/font-awesome/  Icon font
```

There is no build step. Edit the files and push; GitHub Pages serves them directly.

## Common updates

- **New paper:** copy an existing `<li class="pub">` block in the Publications section of `index.html`.
  Use `venue-journal`, `venue-conf`, or `venue-review` for the venue badge.
- **News item:** add an `<li>` at the top of the News list.
- **New CV:** replace `CV.pdf` with a file of the same name. If browsers show the old version, change the link to `CV.pdf?v=2`.
- **Headshot:** add a square photo as `images/profile.jpg`.
- **Colors:** change `--accent` in `css/styles.css`.
