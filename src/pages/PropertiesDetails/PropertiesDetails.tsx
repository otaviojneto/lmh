import { usePublicPropertyById } from '@/application/usePublicProperties';
import Loader from '@/components/Loader/Loader';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PropertyDetails } from './components/PropertyDetails';


const PropertiesDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = usePublicPropertyById(id || '');


  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Todos os imóveis', href: '/properties' },
  ];

  if (isLoading) {
    return <section className='pt-20 min-h-[calc(100dvh-136px)]'><Loader /></section>

  }
  if (!data) {
    return <div className='pt-50 min-h-[calc(100dvh-136px)] flex justify-center'>Propriedade não encontrada</div>;
  }
  return (
    <section className='container min-h-[calc(100dvh-136px)] pt-10'>

      <div className='mt-16'>

        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item) => (
              <React.Fragment key={item.href}>
                <BreadcrumbItem >
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator key={item.href} />

              </React.Fragment>
            ))}
            <BreadcrumbPage>{data?.title_property || ''}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>


        <PropertyDetails property={data} />
      </div>

    </section>
  )
}

export default PropertiesDetails
