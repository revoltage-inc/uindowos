# UindowOS(α)

This repository is unofficial fan site of Ui Shigure, Illustrator and VTuber.  
This fan site that reproduce UindowOS of Ui Shigure.  

> **Warning**  
> This repository is still in alpha stage.  
> This site is not yet open to the public.  

<h2 id="setting">Setting</h2>

<h3>Premise</h3>

- [Install VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Install Workspace recommended VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Install Volta](https://docs.volta.sh/guide/getting-started)

<h3>Create environment</h3>

Create environment with following command.  

```zsh
volta install node@18.9.0 npm@8.19.1

npm install
```

Then create environment file with following command.  

```zsh
cp .env.template .env
```

## Usage

After completing [Setting](./README.md#setting), run develop server with following command.  

```zsh
npm run dev
```

## Script

| Script | Content |
|:-------|:--------|
| `npm run update`| Bulk update of packages |
| `npm run dev` | Run develop server |
| `npm run build` | Production build |
| `npm run sb` | Run Storybook |

## Reference

- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [Vite](https://ja.vitejs.dev/)
- [TailwindCSS](https://tailwindui.com/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)

## License

It is prohibited to clone and publish site without permission, and to use it for commercial purposes.  
Malicious use may result in legal action.  
