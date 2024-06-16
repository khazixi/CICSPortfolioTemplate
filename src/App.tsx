import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
function App() {
  return (
    <>
      <main class='bg-gray-100 min-h-dvh grid grid-cols-3 gap-4 p-4'>
        <div class='bg-white text-black rounded-lg shadow col-span-1 row-span-4'>
        </div>
        <div class='bg-white text-black rounded-lg shadow col-span-2 row-span-2'>
        </div>
        <div class='bg-white text-black rounded-lg shadow col-span-2 row-span-2'>
        </div>
      </main>
    </>
  )
}

export default App
