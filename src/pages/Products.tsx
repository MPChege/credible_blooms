
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

// Product data
const products = [
  // Premium Roses
  {
    id: 1,
    name: "Red Naomi Roses",
    image: "https://images.unsplash.com/photo-1548586196-aa5803b77379?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Premium Roses",
    description: "Our signature red rose with large heads, intense color, and exceptional vase life."
  },
  {
    id: 2,
    name: "White O'Hara Roses",
    image: "https://images.unsplash.com/photo-1535850579364-952ef600d22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Premium Roses",
    description: "Elegant garden roses with multiple petals and a delicate fragrance."
  },
  {
    id: 3,
    name: "Pink Avalanche Roses",
    image: "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Premium Roses",
    description: "Soft pink roses with strong stems and excellent opening properties."
  },
  {
    id: 4,
    name: "Yellow Finesse Roses",
    image: "https://images.unsplash.com/photo-1548043518-a548a0154d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Premium Roses",
    description: "Vibrant yellow roses with perfect form and long stems."
  },
  
  // Spray Roses
  {
    id: 5,
    name: "Peach Spray Roses",
    image: "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Spray Roses",
    description: "Delicate peach spray roses with multiple blooms per stem."
  },
  {
    id: 6,
    name: "White Spray Roses",
    image: "https://images.unsplash.com/photo-1587556930728-27c7a8aa0af1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Spray Roses",
    description: "Pure white spray roses, perfect for weddings and special events."
  },
  {
    id: 7,
    name: "Pink Sensation Spray Roses",
    image: "https://images.unsplash.com/photo-1591027346487-a29a31c37f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Spray Roses",
    description: "Bright pink spray roses with excellent color retention."
  },
  {
    id: 8,
    name: "Red Spray Roses",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Spray Roses",
    description: "Vibrant red spray roses, adding drama and intensity to arrangements."
  },
  
  // Summer Flowers
  {
    id: 9,
    name: "Carnations",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Summer Flowers",
    description: "Available in various colors, these long-lasting flowers are versatile and durable."
  },
  {
    id: 10,
    name: "Hypericum Berries",
    image: "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Summer Flowers",
    description: "Decorative berries that add texture and interest to arrangements."
  },
  {
    id: 11,
    name: "Lisianthus",
    image: "https://images.unsplash.com/photo-1567581170431-80f677314fea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Summer Flowers",
    description: "Elegant flowers with ruffled petals, available in white, pink, and purple."
  },
  {
    id: 12,
    name: "Statice",
    image: "https://images.unsplash.com/photo-1594502184342-2349ffc88838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Summer Flowers",
    description: "Colorful filler flowers that dry beautifully and add texture to arrangements."
  }
];

const categories = ["All", "Premium Roses", "Spray Roses", "Summer Flowers"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      <HeroSection 
        title="Our Flower Collection"
        subtitle="Discover our premium quality blooms grown with care in the Kenyan highlands"
        backgroundImage="https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        height="medium"
      />
      
      {/* Filters and Search */}
      <section className="py-10 bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-sage/20 text-foreground/80 hover:bg-sage/40"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-sage focus:outline-none focus:ring-1 focus:ring-primary bg-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="page-section bg-cream/30">
        <div className="container-tight">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                  description={product.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No flowers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Product Information */}
      <section className="page-section bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-sage/30 text-primary/90 text-sm font-medium px-3 py-1 rounded-full">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-6">
                Our Product Standards
              </h2>
              
              <div className="prose">
                <p>
                  At Credible Blooms, we maintain strict quality control measures throughout the entire 
                  growing and harvesting process. Each flower is carefully inspected to ensure it meets 
                  our high standards before packaging.
                </p>
                <p>
                  Our flowers are harvested at the optimal stage of development, rapidly cooled to 
                  preserve freshness, and carefully graded and bunched according to stem length, 
                  bloom size, and quality.
                </p>
                <p>
                  We implement sustainable post-harvest practices to ensure our flowers reach you 
                  with maximum vase life and beauty. This includes proper hydration treatments and 
                  temperature-controlled storage and transportation.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Quality control process" 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-2/5 h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1552159268-59567c1a1c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Flower inspection" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Orders */}
      <section className="page-section bg-sage/10">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="bg-sage/30 text-primary/90 text-sm font-medium px-3 py-1 rounded-full">
              Tailored Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-6">
              Custom Orders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer custom growing and packaging solutions to meet your specific requirements.
            </p>
          </div>
          
          <div className="glass-panel p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-medium mb-4">How It Works</h3>
                <ul className="space-y-4">
                  {[
                    "Contact us with your specific requirements",
                    "Our team will assess feasibility and provide recommendations",
                    "We'll create a custom growing plan tailored to your needs",
                    "Regular updates on the progress of your order",
                    "Quality-controlled harvesting and packaging",
                    "Timely delivery through our established logistics network"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-medium mb-4">Custom Options Include:</h3>
                <div className="space-y-4">
                  {[
                    "Specific color variations and bloom sizes",
                    "Custom stem lengths to meet your market's preferences",
                    "Specialized packaging with your branding",
                    "Unique flower combinations for signature bouquets",
                    "Seasonal or event-specific growing schedules"
                  ].map((option, index) => (
                    <div key={index} className="glass-card p-3 flex items-center">
                      <div className="bg-sage/40 rounded-full p-2 mr-3">
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
