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

  const filterByCategory = (category) => {
    const menus = [...data]
    if (category === 'all') {
      setMenuItems([...menus])
      return
    }

    const newMenus = menus.filter((item) => item.category === category)
    setMenuItems([...newMenus])
  }

  useEffect(() => {
    const uniqueCategories = getCategories()
    setCategories([...uniqueCategories])
  }, [])

  return (
    <main>
      <Title />
      <Categories categories={categories} filterByCategory={filterByCategory} />
      <section className='section-center'>
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}
export default App
