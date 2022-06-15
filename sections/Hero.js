import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi, I`m <span className="dark:text-purple-600">Cand</span></h1>
      <h3 className="text-4xl my-3">I am Web Designer</h3>
      <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur iste distinctio veniam magnam magni sapiente ea officiis ullam amet.</p>
      <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
    </section>
  )
}

export default Hero