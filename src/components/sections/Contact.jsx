import emailjs from "emailjs-com" 
import { useState } from "react"

const Contact = () => {

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: ""
    });

 

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID, 
                import.meta.env.VITE_TEMPLATE_ID, 
                e.target, 
                import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({name: "", email: "", message: ""})

        }).catch(() => alert("Oops! Something went wrong. Please try again."))
    };

  return (
    <section 
    id="contact"
    className="min-h-screen flex items-center justify-center py-20">

        <div className="px-4 w-150">

            <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-[#9775fa] to-[#40c057] 
                bg-clip-text text-transparent text-center"
            >
                Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="relative">

                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        placeholder="Name..."
                        className="w-full bg-white/5 border border-white/30 px-4 py-3 rounded text-white
                        transition focus:outline-none focus:border-blur focus:border-[#9775fa] 
                        focus:bg-purple-500/5"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>

                <div className="relative">

                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        required
                        placeholder="example@gmail.com"
                        className="w-full bg-white/5 border border-white/30 px-4 py-3 rounded text-white
                        transition focus:outline-none focus:border-blur focus:border-[#9775fa] 
                        focus:bg-purple-500/5"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                <div className="relative">

                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        placeholder="Your Message..."
                        className="w-full bg-white/5 border border-white/30 px-4 py-3 rounded text-white
                        transition focus:outline-none focus:border-blur focus:border-[#9775fa] 
                        focus:bg-purple-500/5"
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                </div>

                <button 
                type="submit"
                className="w-full bg-purple-400 text-white py-3 px-6 rounded font-medium transition relative
                overflow-hidden hover:-translate-y-1 cursor-pointer hover:shadow-[0_0_15px_#9775fa] hover:bg-opacity-4"
                >
                    Send Message
                </button>
            </form>

        </div>
    </section>
  )
}

export default Contact