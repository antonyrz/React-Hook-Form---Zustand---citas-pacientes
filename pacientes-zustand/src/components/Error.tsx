export default function Error({children} : {children: React.ReactNode}) {
  return (
    <p className="bg-red-500 text-white p-3  text-center uppercase text-sm">
      {children}
    </p>
  )
}
