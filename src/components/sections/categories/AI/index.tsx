import { latestItems } from '@/constant/latest-news';
import LastestNPopularNews from '../../LastestNPopularNews';
import TrendingAINews from './TrendingAINews';
import Headline from '../../Headline';
import Banner from '../../Banner';
import Blogs from '../../Blogs';

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
