import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type Props = {
    params: Promise<{ lang: Locale }>;
};

export default async function FunFactsPage({ params }: Props) {
    const { lang } = await params;
    const lore = (await getDictionary(lang, "lore")) as any;
    const funFacts = lore.sections.funFacts;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">{funFacts.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {funFacts.facts?.map((fact: string, index: number) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md">
                        <p className="text-lg">{fact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}