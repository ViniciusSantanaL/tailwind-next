import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}
type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}
