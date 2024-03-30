import { latestItems } from '@/constant/latest-news';
import LastestNPopularNews from '../../../landing/LastestNPopularNews';
import TrendingAINews from './TrendingAINews';
import Headline from '../../../landing/Headline';
import Banner from '../../../landing/Banner';
import Blogs from '../../../landing/Blogs';

const AITab = () => {
	return (
		<>
			<TrendingAINews />
			<LastestNPopularNews />
			<Headline />
			<Banner />
			<Blogs />
		</>
	);
};

export default AITab;
