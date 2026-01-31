 <script>
        document.getElementById('farmForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const water = document.getElementById('water').value;
            const location = document.getElementById('location').value;
            const soil = document.getElementById('soil').value;
            const previousCrop = document.getElementById('previousCrop').value.toLowerCase();
            
            // Simulate processing
            const recommendations = generateRecommendations(water, location, soil, previousCrop);
            
            // Display results
            displayResults(recommendations);
            
            // Scroll to results
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        });
        
        function generateRecommendations(water, location, soil, previousCrop) {
            // This is a simplified recommendation algorithm
            // In a real application, this would be much more complex and possibly use AI/ML
            
            const crops = {
                low: {
                    sandy: { 
                        crop: "Sorghum", 
                        reason: "Drought-resistant crop that thrives in sandy soil with low water.",
                        yield: "30-40 bushels per acre",
                        season: "Late spring to early summer",
                        fertilizer: { n: "20-30", p: "30-40", k: "20-30" }
                    },
                    clay: { 
                        crop: "Millet", 
                        reason: "Excellent for clay soil with low water availability.",
                        yield: "25-35 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "15-25", p: "25-35", k: "15-25" }
                    },
                    loamy: { 
                        crop: "Chickpeas", 
                        reason: "Perfect for loamy soil with low water requirements.",
                        yield: "15-20 bushels per acre",
                        season: "Early spring",
                        fertilizer: { n: "10-20", p: "30-40", k: "20-30" }
                    },
                    silty: { 
                        crop: "Lentils", 
                        reason: "Thrives in silty soil with minimal water.",
                        yield: "20-30 bushels per acre",
                        season: "Early spring",
                        fertilizer: { n: "10-15", p: "30-40", k: "20-30" }
                    },
                    peaty: { 
                        crop: "Barley", 
                        reason: "Well-suited for peaty soil with low water needs.",
                        yield: "40-50 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "30-40", p: "20-30", k: "20-30" }
                    },
                    chalky: { 
                        crop: "Triticale", 
                        reason: "Performs well in chalky soil with low water.",
                        yield: "35-45 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "25-35", p: "30-40", k: "25-35" }
                    }
                },
                medium: {
                    sandy: { 
                        crop: "Peanuts", 
                        reason: "Good choice for sandy soil with medium water availability.",
                        yield: "30-40 bushels per acre",
                        season: "Late spring",
                        fertilizer: { n: "10-20", p: "40-50", k: "30-40" }
                    },
                    clay: { 
                        crop: "Soybeans", 
                        reason: "Ideal for clay soil with medium water and helps fix nitrogen.",
                        yield: "40-50 bushels per acre",
                        season: "Spring to early summer",
                        fertilizer: { n: "20-30", p: "40-50", k: "30-40" }
                    },
                    loamy: { 
                        crop: "Corn", 
                        reason: "Excellent yield in loamy soil with medium water.",
                        yield: "150-180 bushels per acre",
                        season: "Late spring",
                        fertilizer: { n: "40-50", p: "40-50", k: "40-50" }
                    },
                    silty: { 
                        crop: "Wheat", 
                        reason: "Traditional choice for silty soil with medium water.",
                        yield: "50-60 bushels per acre",
                        season: "Fall or spring",
                        fertilizer: { n: "30-40", p: "30-40", k: "20-30" }
                    },
                    peaty: { 
                        crop: "Oats", 
                        reason: "Thrives in peaty soil with medium water.",
                        yield: "60-80 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "30-40", p: "20-30", k: "20-30" }
                    },
                    chalky: { 
                        crop: "Rye", 
                        reason: "Well-adapted to chalky soil with medium water.",
                        yield: "30-40 bushels per acre",
                        season: "Fall",
                        fertilizer: { n: "20-30", p: "20-30", k: "20-30" }
                    }
                },
                high: {
                    sandy: { 
                        crop: "Rice", 
                        reason: "Perfect for sandy soil with high water availability.",
                        yield: "150-200 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "40-50", p: "40-50", k: "30-40" }
                    },
                    clay: { 
                        crop: "Sugarcane", 
                        reason: "Thrives in clay soil with high water requirements.",
                        yield: "30-40 tons per acre",
                        season: "Year-round in tropical regions",
                        fertilizer: { n: "50-60", p: "40-50", k: "50-60" }
                    },
                    loamy: { 
                        crop: "Cotton", 
                        reason: "Excellent for loamy soil with high water availability.",
                        yield: "1-2 bales per acre",
                        season: "Spring",
                        fertilizer: { n: "40-50", p: "30-40", k: "30-40" }
                    },
                    silty: { 
                        crop: "Alfalfa", 
                        reason: "Ideal for silty soil with high water and multiple harvests.",
                        yield: "3-5 tons per acre per year",
                        season: "Spring",
                        fertilizer: { n: "20-30", p: "40-50", k: "40-50" }
                    },
                    peaty: { 
                        crop: "Cranberries", 
                        reason: "Perfect for peaty soil with high water requirements.",
                        yield: "20-30 barrels per acre",
                        season: "Year-round",
                        fertilizer: { n: "20-30", p: "30-40", k: "20-30" }
                    },
                    chalky: { 
                        crop: "Tomatoes", 
                        reason: "Good yield in chalky soil with high water.",
                        yield: "30-40 tons per acre",
                        season: "Spring",
                        fertilizer: { n: "30-40", p: "40-50", k: "40-50" }
                    }
                }
            };
            
            // Get base recommendation
            let recommendation = crops[water][soil];
            
            // Adjust for previous crop (simple rotation logic)
            if (previousCrop.includes('corn') || previousCrop.includes('maize')) {
                // After corn, recommend a legume to fix nitrogen
                if (water === 'low') {
                    recommendation = {
                        crop: "Cowpeas",
                        reason: "Legume crop that fixes nitrogen after corn, suitable for low water conditions.",
                        yield: "15-25 bushels per acre",
                        season: "Late spring to summer",
                        fertilizer: { n: "10-15", p: "30-40", k: "20-30" }
                    };
                } else if (water === 'medium') {
                    recommendation = {
                        crop: "Soybeans",
                        reason: "Nitrogen-fixing legume perfect after corn in medium water conditions.",
                        yield: "40-50 bushels per acre",
                        season: "Spring to early summer",
                        fertilizer: { n: "20-30", p: "40-50", k: "30-40" }
                    };
                } else {
                    recommendation = {
                        crop: "Lima Beans",
                        reason: "Nitrogen-fixing legume that thrives in high water conditions after corn.",
                        yield: "20-30 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "15-25", p: "30-40", k: "30-40" }
                    };
                }
            } else if (previousCrop.includes('wheat')) {
                // After wheat, recommend a broadleaf crop
                if (water === 'low') {
                    recommendation = {
                        crop: "Sunflowers",
                        reason: "Broadleaf crop that breaks pest cycles after wheat, drought-tolerant.",
                        yield: "1000-1500 pounds per acre",
                        season: "Late spring",
                        fertilizer: { n: "20-30", p: "30-40", k: "30-40" }
                    };
                } else if (water === 'medium') {
                    recommendation = {
                        crop: "Canola",
                        reason: "Excellent rotation crop after wheat in medium water conditions.",
                        yield: "30-40 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "30-40", p: "40-50", k: "30-40" }
                    };
                } else {
                    recommendation = {
                        crop: "Rice",
                        reason: "Perfect rotation after wheat in high water conditions.",
                        yield: "150-200 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "40-50", p: "40-50", k: "30-40" }
                    };
                }
            } else if (previousCrop.includes('soy') || previousCrop.includes('bean')) {
                // After legumes, recommend a cereal crop
                if (water === 'low') {
                    recommendation = {
                        crop: "Sorghum",
                        reason: "Cereal crop that utilizes nitrogen fixed by previous legume, drought-resistant.",
                        yield: "30-40 bushels per acre",
                        season: "Late spring to early summer",
                        fertilizer: { n: "20-30", p: "30-40", k: "20-30" }
                    };
                } else if (water === 'medium') {
                    recommendation = {
                        crop: "Corn",
                        reason: "High-yielding cereal that benefits from nitrogen fixed by previous legume.",
                        yield: "150-180 bushels per acre",
                        season: "Late spring",
                        fertilizer: { n: "40-50", p: "40-50", k: "40-50" }
                    };
                } else {
                    recommendation = {
                        crop: "Rice",
                        reason: "Cereal crop that thrives in high water after legumes.",
                        yield: "150-200 bushels per acre",
                        season: "Spring",
                        fertilizer: { n: "40-50", p: "40-50", k: "30-40" }
                    };
                }
            }
            
            return recommendation;
        }
        
        function displayResults(recommendation) {
            document.getElementById('recommendedCrop').textContent = recommendation.crop;
            document.getElementById('cropReason').textContent = recommendation.reason;
            document.getElementById('expectedYield').textContent = recommendation.yield;
            document.getElementById('plantingSeason').textContent = recommendation.season;
            
            // Update fertilizer recommendations
            const fertilizerElements = document.querySelectorAll('.fertilizer-item span');
            fertilizerElements[0].textContent = `Nitrogen (N): ${recommendation.fertilizer.n} kg/acre`;
            fertilizerElements[1].textContent = `Phosphorus (P): ${recommendation.fertilizer.p} kg/acre`;
            fertilizerElements[2].textContent = `Potassium (K): ${recommendation.fertilizer.k} kg/acre`;
            
            // Show results section
            document.getElementById('results').style.display = 'block';
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
