"use client";

import { useState } from "react";
import { Clock, Zap, Star, ShoppingCart } from "lucide-react";
import AutoScrollingText from "./AutoScrollingText";

interface Feature {
  name: string;
  value: string | number;
}

interface CommissionCardProps {
  title: string;
  icon?: "zap" | "clock";
  recommended?: boolean;
  basePrice: number;
  features: Feature[];
  extraPer30Seconds?: number;          // costo por cada 30 segundos adicionales
  stemsPrice?: number;
  fullRightsPercentage?: number;       // porcentaje adicional (ej. 30 = 30%)
  koFiLink?: string;
  baseDuration?: number;
  maxDuration?: number;
  dict: {
    currency: string;
    durationUnit: string;
    pricingNote: string;
    orderNow: string;
    recommended: string;
    fullRightsLabel: string;           // texto para "Full Rights"
  };
}

export default function CommissionCard({
  title,
  icon = "zap",
  recommended = false,
  basePrice,
  features,
  extraPer30Seconds = 0,
  stemsPrice = 0,
  fullRightsPercentage = 0,
  koFiLink = "https://ko-fi.com/wakku_wav/commissions",
  baseDuration = 2,
  maxDuration = 10,
  dict,
}: CommissionCardProps) {
  const [durationMinutes, setDurationMinutes] = useState(baseDuration);
  const [includeStems, setIncludeStems] = useState(false);
  const [includeFullRights, setIncludeFullRights] = useState(false);

  // Calcular segmentos de 30 segundos adicionales
  const extraMinutes = Math.max(0, durationMinutes - baseDuration);
  const extraSegments = Math.ceil(extraMinutes / 0.5); // cada 0.5 min = 1 segmento
  const extraCost = extraSegments * extraPer30Seconds;

  const stemsCost = includeStems ? stemsPrice : 0;
  const subtotal = basePrice + extraCost + stemsCost;

  // Aplicar porcentaje de full rights sobre el subtotal
  const fullRightsCost = includeFullRights ? (subtotal * fullRightsPercentage) / 100 : 0;
  const totalPrice = subtotal + fullRightsCost;

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDurationMinutes(parseFloat(e.target.value));
  };

  const formatDuration = (minutes: number) => {
    const mins = Math.floor(minutes);
    const secs = (minutes % 1) * 60;
    if (secs === 0) return `${mins} ${dict.durationUnit}`;
    return `${mins}:30 ${dict.durationUnit}`;
  };

  const pricingText = dict.pricingNote.replace("{price}", extraPer30Seconds.toString());

  const finalLink = koFiLink;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg sm:rounded-3xl sm:p-8",
        recommended
          ? "border-accent/50 bg-gradient-to-br from-accent/10 to-transparent shadow-accent/10 scale-[1.02]"
          : "border-border/50 bg-gradient-to-br from-background/60 to-background/40 hover:border-accent/30",
      ].join(" ")}
    >
      {recommended && (
        <div className="absolute right-3 top-3 z-20">
          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent/80 px-3 py-1.5 shadow-md">
            <Star className="h-3 w-3 text-white" />
            <span className="text-xs font-bold text-white">{dict.recommended}</span>
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center gap-3">
        <div className={["rounded-full p-2", recommended ? "bg-accent/20" : "bg-primary/20"].join(" ")}>
          {icon === "zap" ? (
            <Zap className={recommended ? "text-accent" : "text-primary"} size={20} />
          ) : (
            <Clock className={recommended ? "text-accent" : "text-primary"} size={20} />
          )}
        </div>
        <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
      </div>

      <div className="mb-6 flex items-baseline justify-end gap-2 border-b border-border/30 pb-4">
        <span className="text-3xl font-extrabold text-foreground">${totalPrice.toFixed(2)}</span>
        <span className="text-sm text-muted-foreground">{dict.currency}</span>
        {(extraCost > 0 || includeStems || includeFullRights) && (
          <span className="text-xs text-muted-foreground line-through">${basePrice}</span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] text-sm">
          <tbody>
            {features.map((feature, idx) => {
              const isDuration = feature.name === "Duración máxima" || feature.name === "Max Duration";
              const isStems = feature.name === "Stems";
              const isRights = feature.name === "Derechos totales" || feature.name === "Full Rights";

              return (
                <tr key={idx} className="border-b border-border/30 last:border-0">
                  <td className="py-3 pr-4 font-medium text-foreground/80 w-2/5">{feature.name}</td>
                  <td className="py-3 text-right w-3/5">
                    {isDuration ? (
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-sm font-medium text-foreground">{formatDuration(durationMinutes)}</span>
                        <input
                          type="range"
                          min={baseDuration}
                          max={maxDuration}
                          step="0.5"
                          value={durationMinutes}
                          onChange={handleDurationChange}
                          className="w-full max-w-[180px]"
                        />
                        <span className="text-xs text-muted-foreground">
                          {pricingText}
                        </span>
                      </div>
                    ) : isStems ? (
                      <label className="flex cursor-pointer items-center justify-end gap-2">
                        <span className="text-sm font-medium">+${stemsPrice}</span>
                        <input
                          type="checkbox"
                          checked={includeStems}
                          onChange={(e) => setIncludeStems(e.target.checked)}
                        />
                      </label>
                    ) : isRights ? (
                      <label className="flex cursor-pointer items-center justify-end gap-2">
                        <span className="text-sm font-medium">
                          {fullRightsPercentage > 0 ? `+${fullRightsPercentage}%` : dict.fullRightsLabel}
                        </span>
                        <input
                          type="checkbox"
                          checked={includeFullRights}
                          onChange={(e) => setIncludeFullRights(e.target.checked)}
                          disabled={fullRightsPercentage === 0}
                        />
                      </label>
                    ) : (
                      <AutoScrollingText text={String(feature.value)} className="text-sm" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <a
          href={finalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent/90 px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:scale-[1.02] hover:from-accent/90 hover:to-accent"
        >
          <ShoppingCart className="h-4 w-4" />
          {dict.orderNow}
        </a>
      </div>
    </div>
  );
}