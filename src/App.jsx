import { useState } from 'react'

import data from './data.js'
import Title from './components/Title.jsx'
import Menu from './components/Menu.jsx'

const App = () => {
  const [menuItems, setMenuItems] = useState(data)

  return (
    <main>
      <section className='container'>
        <Title />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}
export default App
