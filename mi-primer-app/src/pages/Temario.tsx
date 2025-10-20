import PageContainer from "../components/PageContainer/PageContainer";
import { Outlet, useNavigate } from "react-router-dom";
import { infoTemario } from "../data/infoTemario";
import { TopicGrid } from "../components/Topic/TopicGrid";
import { useEffect } from 'react'

export function Temario() {
  const navigate = useNavigate();

  useEffect(() => { 
    navigate("/temario/temario")
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

  return (
    <PageContainer>
      <div className="w-60 h-[calc(100vh-5rem)] shadow-md shadow-neutral-400/30 z-40 overflow-y-auto scrollbar-custom">
        <TopicGrid infoArray={infoTemario} />
      </div>
      <Outlet />
    </PageContainer>
  );
}
