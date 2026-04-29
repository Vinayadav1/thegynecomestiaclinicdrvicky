import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Layout from "./components/Layout"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Treatments = lazy(() => import("./pages/Treatments"))
const Gallery = lazy(() => import("./pages/Gallery"))
const Contact = lazy(() => import("./pages/Contact"))
const Grade1 = lazy(() => import("./pages/Grade1"))
const Grade23 = lazy(() => import("./pages/Grade23"))
const Pseudo = lazy(() => import("./pages/Pseudo"))
const ChestContouring = lazy(() => import("./pages/ChestContouring"))
const ScarlessSurgery = lazy(() => import("./pages/ScarlessSurgery"))

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a1628" }}>
      <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/grade-1-gynecomastia" element={<Grade1 />} />
            <Route path="/grade-2-3-gynecomastia" element={<Grade23 />} />
            <Route path="/pseudo-gynecomastia" element={<Pseudo />} />
            <Route path="/chest-contouring" element={<ChestContouring />} />
            <Route path="/scarless-surgery" element={<ScarlessSurgery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
