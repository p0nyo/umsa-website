import { supabase } from '../../../lib/supabase';

const getEvents = async () => {
    const { data, error } = await supabase
        .from("EVENTS")
        .select("title")
        .eq("id", 1)

        if (error) {
            console.error("Error posting events:" + error.message);
            return;
        }
        console.log(data);
        return data;
};

export default getEvents;