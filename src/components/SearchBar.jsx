import { useShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'

const SearchBar = () => {

    const {search, setSearch} = useShopContext();

  return (
    <div className="flex justify-center">
      <div className="flex items-center border border-gray-400 px-4 py-2 rounded-full w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl transition focus-within:border-black">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 min-w-0 bg-transparent outline-none text-sm placeholder-gray-500" type="text" placeholder="Search" />
        <img src={assets.search_icon} className="w-5 ml-2 opacity-70" alt="Search" />
      </div>
    </div>
  )
}

export default SearchBar