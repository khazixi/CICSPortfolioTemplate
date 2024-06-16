import { JSXElement } from "solid-js"

export function Contact(props: { title: string, information: string, children: JSXElement }) {
  return (
    <div class='grid grid-rows-2 grid-cols-4 hover:bg-gray-200 p-2 min-w-full'>
      <div class='row-span-2 col-span-1 flex items-center'> {props.children} </div>
      <h2 class='col-span-3'> {props.title} </h2>
      <h3 class='col-span-3'> {props.information} </h3>
    </div>
  )
}

export function Skill(props: { type: string, skills: string[] }) {
  const skillList = props.skills.join(', ')
  return (
    <div class='hover:bg-gray-200 p-2 min-w-full'>
      <h2 class='font-medium text-lg'> {props.type} </h2>
      <h3> {skillList} </h3>
    </div>
  )
}

export function Profile(props: { imageUrl: string, firstname: string, lastname: string, info: string }) {
  return (
    <section class='flex flex-col items-center p-4 gap-4'>
      <img src={props.imageUrl} class='rounded-full h-36 w-36' />
      <h1> {props.firstname + ' ' + props.lastname} </h1>
      <h2> {props.info}</h2>
    </section>
  )
}

export function Education(props: { degree: string, graduation: string, school: string, location: string }) {
  return (
    <section class='flex flex-col gap-1'>
      <h2> {props.degree} </h2>
      <h3 class='text-gray-500'> {props.graduation} </h3>
      <h3> {props.school} - {props.location} </h3>
    </section>
  )
}

export function Work(props: { title: string, organization: string, time: string, children: JSXElement }) {
  return (
    <section class='flex flex-col gap-1'>
      <h2> {props.title} / {props.organization} </h2>
      <h3 class='text-gray-500'> {props.time} </h3>
      {props.children}
    </section>
  )
}
