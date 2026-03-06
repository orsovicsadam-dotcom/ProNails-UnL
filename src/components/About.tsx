

const About = () => {
  return (
    <section id="about" className="py-20 bg-rose-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            O mně
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vítejte v ProNails! Už více než 5 let se věnuji
              nehtové modeláži s láskou a precizností. Každá klientka je pro mne jedinečná
              a snažím se vytvořit nehty, které dokonale ladí s její osobností.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Specializuji se na gelové nehty, klasickou manikúru i kreativní zdobení.
              V mém salonu najdete klidnou atmosféru, kde si můžete odpočinout a nechat
              se hýčkat. Těším se na naši společnou chvíli!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;