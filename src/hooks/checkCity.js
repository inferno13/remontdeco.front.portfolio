export const checkCity = index => {
    if (!index){return false;}

    if (index){

        //первые 3 цифры индекса
        const numbers = Number(String(index).slice(0,3));

              if(numbers >= 140 && numbers <= 144){ // Московская
            return 'msk';
        }else if(numbers >= 603 && numbers <= 607){ // Нижегородская
            return "nn";

        }else if(numbers >= 187 && numbers <= 188){ // Ленинградская
            return "spb";
        }else if(numbers >= 443 && numbers <= 446){ // Самарская
            return "smr";
        }else if(numbers >= 644 && numbers <= 646){ // Омская
            return "oms";
        }else if(numbers >= 420 && numbers <= 423){ // Татарстан
            return "kzn";
        }else if(numbers >= 344 && numbers <= 347){ // Ростовская
            return "rst";
        }else if(numbers >= 400 && numbers <= 404){ // Волгоградская
            return "vgd";
        }else if((numbers >= 660 && numbers <= 663) || numbers == 647 || numbers == 648){ // Красноярский
            return "kry";
        }else if(numbers >= 450 && numbers <= 453){ // Башкортостан
            return "ufa";
        }else if(numbers >= 394 && numbers <= 397){ // Воронежская
            return "vrn";
        }else if(numbers >= 614 && numbers <= 619){ // Пермский
            return "prm";

        }else {
            return false;
        }

    }
}
