import { ServiceCards } from "../../Widgets/ServiceCards";
import { Title } from "../layouts/Title";
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="Services" className=" flex flex-col justify-center px-4 py-12 items-center gap-12">
      
  <Title
        section={t('services.sectionTitle')}
        title={t('services.mainTitle')}
        sub_title={t('services.subTitle')}
      />

      <ServiceCards />

  

    </section>
  );
};
