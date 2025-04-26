import Header from "./Header"
import Footer from "./Footer"
const Layout=({children})=>{
   return (
   <div className="">
        <Header />

            <main className="main-content">
                {children}
            </main>
     
        <Footer  />

   </div>
   )
}



export default Layout