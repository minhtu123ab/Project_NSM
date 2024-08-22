import { useRef } from "react";
import CurrentMaterials from "@/components/MaterialsMain/CurrentMaterials";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import TableMaterials from "@/components/MaterialsMain/TableMaterials";
import SearchMaterial from "./SearchMaterial";

const MaterialMain = () => {
  const navigate = useNavigate();

  const tableMaterialRef = useRef();

  return (
    <div className="p-7 bg-[#f1f5f9] h-full min-h-screen">
      <div className="flex flex-col gap-5 ml-52 mt-14">
        <CurrentMaterials />
        <h1 className="text-[#758398] font-sans text-3xl font-semibold">
          Main Material
        </h1>
        <div className="flex justify-between items-center">
          <SearchMaterial tableMaterialRef={tableMaterialRef} />
          <Button
            onClick={() => navigate("/materials/main/created")}
            type="primary"
          >
            Create material
          </Button>
        </div>
        <TableMaterials ref={tableMaterialRef} />
      </div>
    </div>
  );
};

export default MaterialMain;
