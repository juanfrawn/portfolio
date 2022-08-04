import Circle from './Shapes/Circle';

const Shapes = () => { 
    return (
        <>
        <div className=' right-0'></div>
            <Circle 
            width="w-84" 
            heigth="h-84" 
            color="bg-yellow desxs:hidden" 
            opacity="opacity-15 biglg:opacity-30 tabsm:opacity-30" 
            positionX="left-20" 
            positionY="-top-20" 
            blur="blur-100 biglg:blur-200" 
            />

            <Circle 
            width="w-84" 
            heigth="h-84" 
            color="hidden bg-yellow desxs:block" 
            opacity="opacity-40" 
            positionX="right-10" 
            positionY="-top-20" 
            blur="blur-300" 
            />

            <Circle
            width="w-68 tabsm:w-84 desxs:w-102" 
            heigth="h-68 tabsm:w-84 desxs:h-102" 
            color="bg-violet" 
            opacity="opacity-15 biglg:opacity-50 desxs:opacity-50" 
            positionX="-left-40" 
            positionY="top-98 andlg:top-98 desxs:top-99" 
            blur="blur-100 biglg:blur-200 tabsm:blur-220 desxs:blur-280" 
            />

            <Circle
            width="w-0 desxs:w-102" 
            heigth="h-0 desxs:h-102" 
            color="bg-violet" 
            opacity="desxs:opacity-30" 
            positionX="right-40" 
            positionY="desxs:top-999" 
            blur="blur-100 biglg:blur-200 tabsm:blur-220 desxs:blur-280" 
            />

            <Circle 
            width="w-52 tabsm:w-68 desxs:w-32" 
            heigth="h-52 tabsm:w-68 desxs:h-32" 
            color="bg-peach" 
            opacity="opacity-25 tabsm:opacity-50 desxl:opacity-80" 
            positionX="left-14 andmd:left-16 biglg:left-20 desxs:left-14 desmd:left-40" 
            positionY="top-100 andmd:top-110 biglg:top-110 desxs:top-114"   
            blur="blur-3xl biglg:blur-100 tabsm:blur-200 desxs:blur-80 deslg:blur-100 desxl:blur-150" 
            />

            <Circle 
            width="w-36" 
            heigth="h-36" 
            color="hidden bg-peach desxs:block" 
            opacity="opacity-50 desxl:opacity-80" 
            positionX="right-8 desmd:right-40" 
            positionY="top-125"   
            blur="blur-80 deslg:blur-100 desxl:blur-150" 
            />
            <Circle 
            width="w-36" 
            heigth="h-36" 
            color="hidden bg-peach desxs:block" 
            opacity="opacity-50 desxl:opacity-80" 
            positionX="left-8 desmd:left-40" 
            positionY="top-215"   
            blur="blur-80 deslg:blur-100 desxl:blur-150" 
            />

            <Circle 
            width="w-76" 
            heigth="h-76" 
            color="bg-peach" 
            opacity="opacity-20 tabsm:opacity-40" 
            positionX="-right-20" 
            positionY="top-200 andlg:top-210 biglg:top-220" 
            blur="blur-100 biglg:blur-120 tabsm:blur-200" 
            />

            <Circle 
            width="w-76 desxs:w-84" 
            heigth="h-76 desxs:h-84" 
            color="bg-violet" 
            opacity="opacity-20 tabsm:opacity-40 desxs:opacity-50" 
            positionX="-left-40" 
            positionY="top-300 andlg:top-310 desxs:top-300" 
            blur="blur-100 biglg:blur-120 tabsm:blur-200 desxs:blur-300" 
            />

            <Circle 
            width="w-84" 
            heigth="h-84" 
            color="bg-yellow" 
            opacity="opacity-10" 
            positionX="-right-40" 
            positionY="-bottom-2" 
            blur="blur-100 tabsm:blur-200" 
            />
        </>
    )
}

export default Shapes;