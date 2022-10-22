import { useLocale } from '@lib/locale'

export const NotFound = () => {
  const { text } = useLocale()

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-main px-4">
        <h1 className="mb-8 text-3xl font-bold text-white">404 {text.PAGE_NOT_FOUND}</h1>
      </div>
    </>
  )
}
