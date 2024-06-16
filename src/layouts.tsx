import { JSXElement } from "solid-js"

export function ProfileSection(props: { children: JSXElement }) {
  return (
    <article class='bg-white text-black rounded-lg shadow-lg col-span-1 row-span-4 p-4'>
      {props.children}
    </article>
  )
}

export function ContactSection(props: { children: JSXElement }) {
  return (
    <section class='flex flex-col items-center p-4 gap-4'>
      {props.children}
    </section>
  )
}

export function SkillSection(props: { children: JSXElement }) {
  return (
    <section class='flex flex-col items-center p-4'>
      <h1> Skills </h1>
      {props.children}
    </section>
  )
}

export function EducationSection(props: { children: JSXElement }) {
  return (
    <div class='gap-4 flex flex-col bg-white text-black rounded-lg shadow-lg col-span-2 p-4'>
      <h1 class='font-bold pl-0 p-2 text-xl'> Education </h1>
      {props.children}
    </div>
  )
}

export function WorkSection(props: { children: JSXElement }) {
  return (
    <div class='gap-4 flex flex-col bg-white text-black rounded-lg shadow-lg col-span-2 p-4'>
      <h1 class='font-bold pl-0 p-2 text-xl'> Work Experience </h1>
      {props.children}
    </div>
  )
}
