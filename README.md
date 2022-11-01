# Chilean Birds

A Chilean Bird explorer using Next.js 13, Typescript, Tailwind CSS and Tailwind UI. Using [aves.ninja.cl API](https://github.com/joyofpw/chileanbirds-api). Focused on performance: instead of using SSR for each time an user makes a request, i used getStaticProps and getStaticPaths so it builds the ahead of time.

## Installation

First install `pnpm` as package manager so we avoid dependencies problems.

```bash
npm i -g pnpm
```

Then install the packages

```
pnpm install
```

And run dev server with

```
pnpm run dev
```

## Deploy

For production just use `next build`. It's gonna take some time because we need to render almost 200+ subpages for each bird available on the API.

```
pnpm run build
```

> You can see in next.config.mjs that i added eslint skip and typescript error, because i have some conflicts on some types errors.

# Future Work

- [ ] Make search run on server, not on client.
- [ ] Add local storage to save favorite bird.
- [ ] Improve rendering of the 250 birds with virtual list or infinite scroll. Limitations are the api that send you all the birds, there's no way of querying it like `limit=50`
- [ ] Add i18n for english support. But the API is available for spanish only.

# Limitations

- [ ] Gallery preview renders with `<image>` html5 element. Not with Next Image component, so there will be CLS(Cumulative Layout Shift) almost in every page detail render.
- [ ] React Audio player breaks on production when we run `next build` (?).
