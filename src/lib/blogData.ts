export interface BlogSection {
    type: 'paragraph' | 'heading' | 'blockquote' | 'list';
    content: string | string[];
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    introduction: string;
    sections: BlogSection[];
    conclusion: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "warli-story",
        title: "The Story of Warli Art",
        excerpt: "Exploring the geometric simplicity and deep-rooted nature of Maharashtra's tribal traditions.",
        date: "March 15, 2024",
        readTime: "5 min read",
        author: "Anjali Sharma",
        image: "/images/warli.png",
        introduction: "Nestled in the rugged Sahyadri ranges of Maharashtra, the Warli tribe has preserved a unique and ancient visual language for millennia. Unlike other traditional art forms that depict elaborate deities and courtly scenes, Warli painting is a humble, earthy celebration of daily life, community, and an unshakeable connection to Mother Nature.",
        sections: [
            {
                type: "heading",
                content: "Geometric Roots of the Cosmos"
            },
            {
                type: "paragraph",
                content: "The visual vocabulary of Warli art is deceptively simple, consisting of only three basic geometric shapes: the circle, the triangle, and the square. These shapes are not abstract choices; they are direct observations of their natural environment. The circle represents the celestial bodies—the sun and the moon—which dictate the rhythms of tribal life. The triangle represents mountains and conical trees. The square, known as the 'Chauk' or 'Chaukat', represents the sacred enclosure, denoting fertility, the earth, and the mother goddess Palaghata."
            },
            {
                type: "heading",
                content: "The Ritual of Rice Paste"
            },
            {
                type: "paragraph",
                content: "Traditionally, Warli paintings were not painted on canvases but directly on the walls of mud huts. The walls were prepared using a mixture of cow dung, earth, and red clay, which provided a warm, dark terracotta background. The white pigment was made from ground rice paste mixed with water and a tiny bit of acacia gum for binding. The painting tool was a simple bamboo stick with its tip chewed to form a soft brush. This organic process connects the painting directly to the materials of the land."
            },
            {
                type: "blockquote",
                content: "In Warli art, there are no depictions of mythological characters or deities. Instead, the focus is entirely on the daily life of the community and their harmonious relationship with nature."
            },
            {
                type: "heading",
                content: "The Tarpa Dance: A Celebration of Unity"
            },
            {
                type: "paragraph",
                content: "Perhaps the most iconic motif in Warli art is the Tarpa dance. The tarpa is a trumpet-like instrument made from a dried gourd. In the painting, a musician stands in the center playing the tarpa, while men and women hold hands and form a spiral dance around him. This spiral is not arbitrary; it represents the cycle of life and the changing of the seasons. There is no hierarchy in the circle; everyone moves together in a single, flowing community line, emphasizing harmony and cooperation."
            },
            {
                type: "heading",
                content: "Evolution in the Modern Era"
            },
            {
                type: "paragraph",
                content: "For generations, Warli painting was a ritual art practiced primarily by women during weddings and harvests. However, in the 1970s, an artist named Jivya Soma Mashe broke with tradition by painting daily. He transferred these ancient designs onto paper and canvas, introducing Warli art to the global art world. Today, contemporary Warli artists continue to explore modern themes—such as schools, trains, and cities—while respecting the geometric language and ecological values of their ancestors."
            }
        ],
        conclusion: "Warli art reminds us of a time when humanity lived in perfect alignment with nature. Its enduring appeal lies in its simplicity: with just white lines and basic shapes, it manages to convey the profound joy of communal existence and the sacredness of the natural world."
    },
    {
        id: "madhubani-understanding",
        title: "Understanding Madhubani Painting",
        excerpt: "How the women of Mithila turned their courtyard rituals into a globally recognized art form.",
        date: "March 10, 2024",
        readTime: "8 min read",
        author: "Priya Singh",
        image: "/images/madhubani.png",
        introduction: "Originating from the Mithila region of Bihar, Madhubani painting (also known as Mithila painting) is a brilliant tapestry of color, mythology, and cultural identity. For centuries, this art form was a closely guarded tradition, passed down from mothers to daughters, turning simple courtyards into spaces of ritualistic beauty and storytelling.",
        sections: [
            {
                type: "heading",
                content: "Mythological Beginnings"
            },
            {
                type: "paragraph",
                content: "According to local legend, the history of Madhubani painting dates back to the time of the Ramayana. It is said that King Janaka of Mithila commissioned local artists to paint the entire kingdom to celebrate the wedding of his daughter, Sita, to Lord Rama. Ever since, the women of Mithila have kept this tradition alive, painting the mud walls and clay floors of their homes during major life events, festivals, and harvests."
            },
            {
                type: "heading",
                content: "The Five Distinct Styles"
            },
            {
                type: "paragraph",
                content: "Madhubani painting is not a single uniform style; rather, it is divided into five distinct sub-styles, each with its own visual code:"
            },
            {
                type: "list",
                content: [
                    "Bharni: Characterized by rich, vibrant colors (like orange, red, and yellow) filling in bold black outlines of mythological characters.",
                    "Katchni: Emphasizes line drawings, cross-hatching, and intricate patterns. The colors used are minimal, often just red and black.",
                    "Tantrik: Centered around spiritual and mystical symbols, depicting forms of cosmic energy and deities like Kali and Durga.",
                    "Godna: Inspired by traditional tattoo art, using repeating geometric circles, lines, and patterns of nature.",
                    "Kohbar: Symbolic art created in the nuptial chamber, filled with fertility symbols like fish (representing good luck), lotuses, and tortoises."
                ]
            },
            {
                type: "heading",
                content: "A Palette of Natural Dyes"
            },
            {
                type: "paragraph",
                content: "What sets authentic Madhubani art apart is its absolute reliance on natural pigments. Black is gathered from lamp soot mixed with cow dung; yellow is extracted from turmeric or the pollen of marigold flowers; red comes from local clay or kusum flower petals; blue is sourced from indigo; and green is made from wild apple leaves. These pigments are applied using matchsticks, twigs, fingers, and fine brushes made of animal hair, resulting in highly saturated, long-lasting colors."
            },
            {
                type: "blockquote",
                content: "What makes Madhubani art unique is the complete absence of empty space. The gaps between main figures are filled with intricate drawings of flowers, birds, and geometric patterns, creating a sense of horror vacui."
            },
            {
                type: "heading",
                content: "From Mud Walls to Handmade Paper"
            },
            {
                type: "paragraph",
                content: "In the late 1960s, a severe drought struck Bihar, threatening the livelihoods of rural communities. To stimulate the economy, the government encouraged the women of Mithila to paint their traditional designs on handmade paper for sale. This transition catapulted Madhubani painting into the commercial art market. Today, Madhubani is recognized worldwide, appearing on canvas, sarees, pottery, and even trains, transforming a localized ritual into a celebrated emblem of Indian folk heritage."
            }
        ],
        conclusion: "Madhubani art is more than just decoration; it is a visual language of hope, blessing, and relationship. Through its vivid colors and continuous lines, it tells the story of a resilient community that found a way to share its heritage with the world."
    },
    {
        id: "tribal-modern-influence",
        title: "How Tribal Art Influences Modern Artists",
        excerpt: "Personal reflections on integrating ancient aesthetics into contemporary digital mediums.",
        date: "March 5, 2024",
        readTime: "6 min read",
        author: "Rohan Patel",
        image: "/images/tribal-modern.png",
        introduction: "In an era of hyper-realistic digital graphics and sterile modern design, contemporary artists are increasingly looking backward to find inspiration. The ancient, stylized aesthetics of Indian tribal art forms—such as Gond, Warli, and Madhubani—are finding new expression on digital canvases, streetwear, and corporate identities, sparking a fascinating dialogue between tradition and modernity.",
        sections: [
            {
                type: "heading",
                content: "Challenging the 'Fine Art' Divide"
            },
            {
                type: "paragraph",
                content: "Historically, Western art institutions drew a sharp line between 'fine art' (paintings on canvas, sculptures) and 'folk/tribal craft' (decorative village traditions). Modern Indian artists are actively dismantling this hierarchy. By using tribal patterns, flat perspectives, and symbolic motifs, they are demonstrating that tribal aesthetics possess a high level of abstraction and narrative complexity that rivals any modern artistic movement."
            },
            {
                type: "heading",
                content: "Ethical Collaboration vs. Appropriation"
            },
            {
                type: "paragraph",
                content: "As tribal patterns find their way onto mainstream merchandise, clothing, and advertising, a critical conversation surrounding cultural appropriation has surfaced. Tribal symbols are often sacred and deeply tied to ritual. Contemporary artists have a responsibility to engage with these forms ethically—either through direct collaborations with tribal craftsmen, providing attribution, or learning and respecting the stories behind the lines rather than treating them as mere decorative assets."
            },
            {
                type: "blockquote",
                content: "The goal is not to freeze tribal art in the past, but to let it breathe and grow in the present. Modern fusion allows these traditions to remain living, evolving languages."
            },
            {
                type: "heading",
                content: "The Digital Translation"
            },
            {
                type: "paragraph",
                content: "Digital illustration software has opened up new possibilities for tribal patterns. The clean vector lines of Adobe Illustrator, combined with textured brush engines, allow modern designers to recreate the hand-painted feel of tribal art with pixel-perfect precision. This fusion of hand-drawn textures and digital gradients creates a fresh, retro-futuristic aesthetic that appeals to a global, internet-native audience."
            }
        ],
        conclusion: "The influence of tribal art on modern design shows that the most enduring ideas are often the oldest. By adapting tribal motifs with respect and creativity, contemporary artists are keeping ancient stories alive, proving that the simple strokes of our ancestors can still guide our modern imaginations."
    }
];
