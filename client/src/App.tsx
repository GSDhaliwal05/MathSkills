import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import Home from "@/pages/Home";
import Numbers from "@/pages/Numbers";
import Exponents from "@/pages/Exponents";
import Integers from "@/pages/Integers";
import Financial from "@/pages/Financial";
import Data from "@/pages/Data";
import Fractions from "@/pages/Fractions";
import Algebra from "@/pages/Algebra";
import Measurements from "@/pages/Measurements";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/numbers" component={Numbers} />
          <Route path="/exponents" component={Exponents} />
          <Route path="/integers" component={Integers} />
          <Route path="/financial" component={Financial} />
          <Route path="/data" component={Data} />
          <Route path="/fractions" component={Fractions} />
          <Route path="/algebra" component={Algebra} />
          <Route path="/measurements" component={Measurements} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-calculator text-white"></i>
                </div>
                <span className="text-xl font-bold font-['Poppins']">Math Skills</span>
              </div>
              <p className="text-gray-300">Your complete guide to Grade 7 mathematics success.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-['Poppins']">Quick Links</h3>
              <div className="space-y-2">
                <a href="/numbers" className="block text-gray-300 hover:text-white transition-colors">Numbers</a>
                <a href="/algebra" className="block text-gray-300 hover:text-white transition-colors">Algebra</a>
                <a href="/fractions" className="block text-gray-300 hover:text-white transition-colors">Fractions</a>
                <a href="/measurements" className="block text-gray-300 hover:text-white transition-colors">Measurements</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-['Poppins']">Study Tips</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Practice regularly</p>
                <p>• Work through examples step-by-step</p>
                <p>• Ask questions when stuck</p>
                <p>• Use visual aids and diagrams</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Math Skills™</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
