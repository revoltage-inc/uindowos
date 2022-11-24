# UindowOS(α)

This repository is unofficial fan site of [Ui Shigure](https://twitter.com/ui_shig), Illustrator and VTuber.  
It is created with reference to "UindowOS" of the stream screen of Ui Shigure.  

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
volta install node@18.12.1 npm@9.1.2

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

This repository is [MIT License](https://opensource.org/licenses/MIT).  
Malicious use may result in legal action.  
