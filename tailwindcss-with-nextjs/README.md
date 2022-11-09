# Components using Tailwind CSS with NextJS

## Getting Started

```sh
# install packages
yarn

# start storybook
yarn sb

# start nextjs
yarn dev
```

## Liveview

- [StoryBook Build](https://aistyler.github.io/howto-ghpages/tailwindcss-with-nextjs)

## Tailwind CSS References

- [daisyUI](https://daisyui.com/)
- [Layout](https://tailwindcss.com/docs/aspect-ratio)
- [Flexbox & Grid](https://tailwindcss.com/docs/flex-basis)
- [Typography](https://tailwindcss.com/docs/font-family)

## Appendix

### Storybook Setup

```sh
# init story book
npx storybook init

```

### Publish storybook build to Github pages

```sh
# build storybook
yarn build:sb

# upload to github pages
cd build-storybook
git commit -a -m "build tailwindcss-with-nextjs storybook"
git push
```
