import { HTMLAttributes } from 'react'

export default function Skeleton({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-skeleton ${className}`}
      {...props}
    />
  )
}
