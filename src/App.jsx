import { useEffect, useState } from 'react'

import data from './data.js'
import Title from './components/Title.jsx'
import Menu from './components/Menu.jsx'
import Categories from './components/Categories.jsx'

const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    const allCategories = menuItems.map((item) => item.category)
    const tempCategories = new Set(allCategories)
    return ['all', ...tempCategories]
  }

  useEffect(() => {
    const uniqueCategories = getCategories()
    setCategories([...uniqueCategories])
  }, [])

  return (
    <main>
      <Title />
      <Categories categories={categories} />
      <section className='section-center'>
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}
export default App
