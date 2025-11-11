import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { ContentBlock } from "@/components/ContentBlock";
import { FeaturedImage } from "@/components/FeaturedImage";
import { ClosingSection } from "@/components/ClosingSection";
import { FloatingButton } from "@/components/FloatingButton";
import { Heart } from "lucide-react";
import ceremonyCeremony from "@/assets/nadia-sebastian-ceremony.webp";
import churchMoment from "@/assets/nadia-sebastian-church.webp";
import celebrationDance from "@/assets/nadia-sebastian-celebration.webp";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero
        badge="💕 Historia Real"
        title="Cómo una lista de novios online nos permitió pagar nuestra luna de miel: La historia de Nadia y Sebastián"
        subtitle="Nuestro matrimonio fue al revés de todo manual tradicional de novias. No hubo años de noviazgo previos ni tampoco meses interminables de planificación. Tres meses después de empezar a conocernos como pareja, me pidió matrimonio y tres meses después de eso, nos casamos. Sí, leíste bien: de solteros a casados en solo 6 meses. Esta es nuestra historia."
        author="Nadia"
        date="Abril 2023"
        imageSrc={churchMoment}
        imageAlt="Nadia y Sebastián en su historia de amor"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl bg-white">
        <ContentSection title="✨ Una historia de 10 años (que tomó 6 meses)">
          <p>
            La verdad es que Sebastián y yo nos conocemos hace más de 10 años. Cada uno tenía su vida, su pareja, sus cosas. Él vivía en Iquique, en el norte de Chile. Yo en Santiago. Lo único que nos conectaba era que mi hermana y mi cuñado eran amigos suyos.
          </p>
          <p>
            Yo viajaba al norte a visitar a mis hermanas, y siempre, sin falta, me encontraba con él en algún asado, en alguna junta, en alguna celebración familiar.
          </p>
          <p>
            Hasta que un día, en uno de esos encuentros, coincidió que ambos estábamos solteros.
          </p>
          <p>
            Y todo cambió.
          </p>
          <p>
            Decidimos conocernos de otra forma. Ya no como "el amigo del cuñado" o "la hermana de mi amiga". Sino como Nadia y Sebastián. Dos personas que, después de una década de verse de lejos, finalmente se permitieron verse de cerca.
          </p>
          <p>
            Tres meses después, me pidió matrimonio.
          </p>
          <p>
            No fue impulsivo. Fue certero. Cuando llevas 10 años cruzándote con alguien en distintos momentos de tu vida, y finalmente todo coincide en el momento correcto, simplemente lo sabes.
          </p>
          <p>
            Y tres meses después de ese "sí", nos casamos el 28 de abril de 2023.
          </p>
        </ContentSection>

        <ContentSection title="⚠️ El problema que nadie nos contó">
          <p>
            Con solo tres meses para planear todo, teníamos que tomar decisiones rápidas. Y una de las más importantes era qué hacer con los regalos.
          </p>
          <p>
            Hicimos lo que todo el mundo hace: fuimos a las casas comerciales.
          </p>
          <p>
            Entramos a Falabella. Entramos a Paris. Escuchamos las opciones.
          </p>
          <p>
            Y todas nos exigían lo mismo: sacar una tarjeta de crédito o ser cuenta correntista de los bancos asociados.
          </p>
          <p className="font-semibold text-lg">
            El problema era simple: ninguno de los dos tiene tarjeta de crédito.
          </p>
          <p>
            No es que estuviéramos en contra. Simplemente no las necesitábamos y no las queríamos. Y definitivamente no íbamos a sacar una solo para poder recibir los regalos de nuestro matrimonio.
          </p>
          <p>
            La otra opción popular en ese entonces era la de los sobres con dinero. Pero la verdad es que nos parecía súper impersonal. Un poco frívolo, incluso.
          </p>
          <p>
            Además, había algo práctico que nadie parecía entender: cada uno de nosotros ya tenía su casa, sus cosas, sus electrodomésticos. No necesitábamos una tostadora ni un juego de sábanas. Necesitábamos el dinero para poder irnos de luna de miel.
          </p>
          <p className="font-semibold text-lg">
            Queríamos algo distinto. Algo que tuviera más ilusión. Algo más creativo. Y sobre todo, algo que nos diera el dinero directo en nuestra cuenta, sin condiciones.
          </p>
        </ContentSection>

        <FeaturedImage 
          src={ceremonyCeremony}
          alt="Nadia y Sebastián durante su ceremonia de boda"
        />

        <ContentSection title="💡 Mi Lista de Novios: la solución que lo cambió todo">
          <p>
            Y ahí fue cuando descubrimos Mi Lista de Novios a través de publicidad online.
          </p>
          <p>
            Lo que nos convenció inmediatamente fue que tenía exactamente lo que buscábamos:
          </p>
          <div className="bg-accent/30 rounded-xl p-6 space-y-4">
            <p>
              <span className="font-semibold">Era práctica:</span> No necesitabas tarjetas de crédito. El dinero llegaba directo a tu cuenta bancaria.
            </p>
            <p>
              <span className="font-semibold">Era creativa:</span> Podías crear regalos personalizados que te representaran como pareja. Hacerlo único.
            </p>
            <p>
              <span className="font-semibold">Era honesta:</span> No había letra chica. No había condiciones raras. Recibes el 100% de lo que tus invitados regalan.
            </p>
          </div>
          <p>
            Al principio, como cualquier cosa que involucra dinero, nos dio un poco de desconfianza. Pero después vimos todas las reseñas que había, todas las personas que lo habían utilizado, y ahí confiamos completamente.
          </p>
          <p className="font-semibold text-lg">
            Nos decidimos de inmediato.
          </p>
        </ContentSection>

        <ContentSection title="🎨 Creando una lista que nos representaba (y nos divertía)">
          <p>
            Lo primero que nos llamó la atención cuando entramos al sitio fueron los regalos de ejemplo.
          </p>
          <p>
            Había una variedad increíble de opciones. Algunos eran súper divertidos, otros muy románticos, otros súper creativos. Y podías modificarlos o crear los tuyos propios desde cero.
          </p>
          <p className="font-semibold text-lg">
            El proceso de crear la lista fue súper entretenido.
          </p>
          <p>
            Yo creé mis propios deseos como novia. Él creó los suyos como novio. Y después creamos juntos los deseos que queríamos compartir.
          </p>
          <p>
            Agregamos cosas como:
          </p>
          <div className="space-y-3 my-4">
            <div className="flex gap-3 items-start">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
              <p>"Conciertos privados" de los cantantes que me gustan</p>
            </div>
            <div className="flex gap-3 items-start">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
              <p>"Un fin de semana sin los suegros" (ese fue idea de Sebastián y nos reímos mucho)</p>
            </div>
            <div className="flex gap-3 items-start">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
              <p>"Volver al lugar donde todo comenzó"</p>
            </div>
          </div>
          <p>
            Y para los amigos que sabíamos que nos iban a hacer regalos más pequeños, o que venían solos, pusimos regalos simbólicos como:
          </p>
          <div className="space-y-3 my-4">
            <div className="flex gap-3 items-start">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
              <p>"Un abrazo que te entregue calma"</p>
            </div>
            <div className="flex gap-3 items-start">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
              <p>"Besos"</p>
            </div>
            <div className="flex gap-3 items-start">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
              <p>"Alegría infinita"</p>
            </div>
          </div>
          <p className="font-semibold">
            Todo estuvo listo rápido. Todo estuvo claro. No tuvimos ninguna duda porque la plataforma lo explicaba todo súper bien.
          </p>
        </ContentSection>


        <ContentSection title="💌 Los mensajes que nos llegaron (y nos hicieron llorar)">
          <p>
            Cuando empezaron a llegar los regalos, lo que más nos emocionó no fue ver el monto. Fue leer los mensajes.
          </p>
          <p>
            Porque cada persona asociaba sus palabras al regalo que había elegido.
          </p>
          <div className="bg-accent/30 rounded-xl p-6 border-l-4 border-primary">
            <p className="italic text-foreground/90 leading-relaxed">
              Por ejemplo, alguien que nos regaló "Un abrazo que te entregue calma" escribió: "A través de este abrazo quiero expresarte todo mi cariño y toda la tranquilidad que vas a necesitar para ese día tan especial."
            </p>
          </div>
          <p className="font-semibold text-lg">
            Era hermoso.
          </p>
          <p>
            Uno sabía que eran cosas que la gente claramente no podía comprar físicamente. Pero en ese momento se creaba la ilusión de que sí. De que sí podían comprarte un abrazo, de que sí podían comprarte alegría, de que sí podían comprarte volver al lugar donde todo comenzó.
          </p>
          <p>
            Fue emocionante, romántico, y hacía mucha ilusión.
          </p>
          <p className="font-semibold">
            Cada mensaje lo guardamos. Los leímos juntos. Y hasta hoy, cuando los releemos, nos emocionamos igual que el primer día.
          </p>
        </ContentSection>

        <ContentSection title="💰 El dinero llegó directo a nuestra cuenta (sin vueltas)">
          <p>
            Una de las cosas que más valoramos de Mi Lista de Novios fue la transparencia total con el dinero.
          </p>
          <p>
            Cada vez que alguien nos hacía un regalo, nos llegaba un correo electrónico con todo el detalle: el monto, qué regalaron, el mensaje del invitado, y el nombre de quien nos lo dio.
          </p>
          <p className="font-semibold text-lg">
            Y cada dos miércoles, tal como nos habían explicado desde el principio, el dinero se depositaba directo en nuestra cuenta bancaria.
          </p>
          <p>
            No fue una tarjeta de crédito. No fueron puntos. Fue dinero real que pudimos usar exactamente como queríamos.
          </p>
          <p className="font-semibold">
            Sin condiciones. Sin letra chica. Sin sorpresas.
          </p>
        </ContentSection>

        <ContentSection title="✈️ Miami: la luna de miel que pagamos completa con los regalos">
          <p className="font-semibold text-lg">
            Con el dinero que recibimos, nos fuimos de luna de miel a Miami.
          </p>
          <p>
            Estuvimos como 15 días. Fue maravilloso.
          </p>
          <p>
            Pagamos los pasajes de ida y vuelta completos con el dinero de los regalos. Sin endeudarnos. Sin usar tarjetas de crédito. Sin preocupaciones.
          </p>
          <p>
            Fue exactamente lo que necesitábamos: empezar nuestra vida de casados con un viaje increíble, disfrutando, sin deudas, sin ataduras.
          </p>
          <p className="font-semibold">
            Y todo gracias a que elegimos una plataforma que nos daba libertad total con nuestro dinero.
          </p>
        </ContentSection>

        <ContentSection title="🤝 La atención del equipo (y el detalle que marca la diferencia)">
          <p>
            La atención del equipo de Mi Lista de Novios siempre fue buena. Respondían rápido, resolvían dudas, todo funcionó perfecto.
          </p>
          <p className="font-semibold text-lg">
            Pero hay algo que me gustó especialmente y que nadie te cuenta:
          </p>
          <p>
            Después de la ceremonia, el equipo mandó un mensaje de recordatorio a las personas que aún no habían entregado un regalo.
          </p>
          <p>
            No fue invasivo. No fue incómodo. Fue simplemente un recordatorio amable diciéndoles que aún estaban a tiempo.
          </p>
          <p>
            Y funcionó. Varios amigos que por distintas razones no habían podido entrar antes, recibieron ese recordatorio y nos hicieron sus regalos después.
          </p>
          <p className="font-semibold">
            Eso es algo súper positivo que rescatar. Porque uno está en modo post-matrimonio, relajándose, disfrutando, y el equipo se encarga de esos detalles por ti.
          </p>
        </ContentSection>

        <ContentSection title="😰 Lo más estresante no fue la lista (fue otra cosa)">
          <p>
            Si hay algo que me quitó el sueño durante esos tres meses de planificación, no fue la lista de novios. Fue la lista de invitados.
          </p>
          <p className="font-semibold text-lg">
            ¿A quién invitas? ¿A quién dejas fuera? ¿Qué pasa si alguien no puede asistir? ¿Por quién lo reemplazas?
          </p>
          <p>
            Esa fue, sin duda, la parte más estresante de todo el proceso.
          </p>
          <p>
            Porque cuando tienes un matrimonio íntimo, cada nombre en esa lista importa. Cada decisión tiene peso.
          </p>
          <p className="font-semibold">
            Pero al final, elegimos bien. Nos rodeamos de las personas correctas, de quienes realmente queríamos que fueran parte de ese día tan especial.
          </p>
        </ContentSection>

        <ContentSection title="🌟 El matrimonio que planeamos a distancia (y disfrutamos)">
          <p>
            Lo más curioso de todo esto es que planeamos nuestro matrimonio completamente a distancia. Sebastián seguía viviendo en Iquique. Yo en Santiago.
          </p>
          <p>
            Nos conectábamos por videollamada, compartíamos ideas por WhatsApp, coordinábamos proveedores por teléfono.
          </p>
          <p className="font-semibold text-lg">
            Y ¿sabes qué? Lo disfrutamos absolutamente todo.
          </p>
          <p>
            Creo que lo que más disfrutamos fue pensar en los demás. En cómo lo iban a pasar nuestros invitados. En cómo lo iban a sentir. En planear un momento agradable junto a todos nuestros seres queridos.
          </p>
          <div className="bg-accent/30 rounded-xl p-6 border-l-4 border-primary">
            <p className="font-semibold text-lg italic">
              Si tuviera que describir nuestro matrimonio en tres palabras, serían estas: MAGIA - GRATITUD - BENDICIÓN.
            </p>
          </div>
          <p>
            Fue mágico porque todo fluyó de forma natural, sin forzar nada. Fue lleno de gratitud porque estábamos rodeados de las personas que realmente nos importan y que nos acompañaron en ese momento tan especial. Y fue una bendición porque cada detalle, cada momento, cada decisión, la tomamos pensando en nosotros y en lo que realmente queríamos.
          </p>
        </ContentSection>

        <ContentSection title="💬 Mi consejo para novias apuradas (o valientes)">
          <p className="font-semibold text-lg">
            Si estás por casarte y sientes que no tienes tiempo para todo, o si simplemente quieres hacer las cosas diferentes, déjame decirte algo:
          </p>
          <p>
            No necesitas años para planear un matrimonio perfecto.
          </p>
          <p>
            Nosotros lo hicimos en 3 meses, a distancia, y fue mágico.
          </p>
          <p>
            Tampoco necesitas seguir el manual tradicional de las listas de novios. Si ya tienes tu casa armada, si lo que necesitas es el dinero para tu luna de miel o para empezar esta nueva etapa sin deudas, entonces no te amarres a una casa comercial.
          </p>
          <p className="font-semibold text-lg">
            Elige la libertad. Elige recibir el dinero directo en tu cuenta. Elige crear regalos que te representen como pareja.
          </p>
          <p>
            Porque al final, tu matrimonio es tuyo. Y tu lista de regalos también.
          </p>
        </ContentSection>
      </div>
      
      <ClosingSection
        imageSrc={celebrationDance}
        imageAlt="Nadia y Sebastián el día de su boda"
        title="Nadia y Sebastián - Casados en Abril 2023"
        content="Nadia y Sebastián se casaron el 28 de abril de 2023 después de conocerse durante 10 años como amigos. Hoy viven felices entre Santiago e Iquique, planean su segundo gran viaje juntos, y siguen demostrando que cuando es el momento correcto, todo fluye."
        authorNote="Abril 2023 - Una historia de 10 años en 6 meses"
        ctaText="¿Lista para crear tu propia historia? Regístrate gratis en milistadenovios.cl y empieza a armar la lista de regalos que realmente quieren recibir. Sin letra chica. Sin condiciones. Solo ustedes y sus sueños."
      />
      
      <FloatingButton />
    </main>
  );
};

export default Index;
