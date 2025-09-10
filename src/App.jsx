import React, { useState, useEffect } from 'react';
import './App.css';
import sfhLogo from './assets/SFH_VIP_Logo.png';

const SmartFinanceHub = () => {
  const [activeTab, setActiveTab] = useState('market');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const marketData = [
    { symbol: 'BTC/USD', price: '$46,100', change: '+2.4%', color: 'text-orange-400' },
    { symbol: 'ETH/USD', price: '$2,780', change: '+1.8%', color: 'text-blue-400' },
    { symbol: 'Total Market Cap', price: '$1.45T', change: '+3.2%', color: 'text-purple-400' }
  ];

  const articles = [
    {
      id: 1,
      category: 'Institutional',
      featured: true,
      title: "BlackRock's Bitcoin ETF Sees Record $2.1B Inflow as Institutional Adoption Accelerates",
      excerpt: "Institutional investors are flooding into Bitcoin ETFs at unprecedented rates, signaling a major shift in traditional finance's approach to digital assets...",
      author: "Marcus Chen",
      time: "2 hours ago",
      views: "12.3K",
      readTime: "4 min",
      tags: ['Bitcoin', 'ETF', 'Institutional']
    },
    {
      id: 2,
      category: 'DeFi',
      title: "DeFi Protocol Aave Launches V4 with Revolutionary Cross-Chain Liquidity Pools",
      excerpt: "The latest iteration promises to unlock $50B in cross-chain liquidity, potentially reshaping the entire DeFi landscape...",
      author: "Sarah Kim",
      time: "4 hours ago",
      views: "8.7K",
      readTime: "6 min",
      tags: ['DeFi', 'Aave', 'Cross-chain']
    },
    {
      id: 3,
      category: 'Venture Capital',
      featured: true,
      title: "Exclusive: Venture Capital Giant a16z Leads $150M Round in AI-Crypto Startup",
      excerpt: "Sources close to the deal reveal the startup is developing AI-powered trading algorithms that have shown 340% returns in backtesting...",
      author: "David Rodriguez",
      time: "6 hours ago",
      views: "15.2K",
      readTime: "5 min",
      tags: ['VC', 'AI', 'Trading']
    }
  ];

  const alphaSignals = [
    {
      type: 'BUY',
      symbol: 'SOL',
      confidence: '92%',
      target: '$180',
      timeframe: '7-14 days',
      analysis: 'Breakout above key resistance, institutional accumulation detected'
    },
    {
      type: 'WATCH',
      symbol: 'AVAX',
      confidence: '78%',
      target: '$45',
      timeframe: '2-3 weeks',
      analysis: 'Subnet activity increasing, partnership announcements expected'
    },
    {
      type: 'SELL',
      symbol: 'DOGE',
      confidence: '85%',
      target: '$0.06',
      timeframe: '5-7 days',
      analysis: 'Whale distribution pattern, momentum divergence'
    }
  ];

  const portfolioData = [
    { name: 'BTC', percentage: 45, color: '#F7931A' },
    { name: 'ETH', percentage: 25, color: '#627EEA' },
    { name: 'SOL', percentage: 15, color: '#9945FF' },
    { name: 'AVAX', percentage: 10, color: '#E84142' },
    { name: 'Others', percentage: 5, color: '#6B7280' }
  ];

  const analyticsData = [
    { metric: 'Total Readers', value: '47.2K', change: '+12.3%', icon: '👥' },
    { metric: 'Avg. Session', value: '8m 34s', change: '+5.7%', icon: '⏱️' },
    { metric: 'Engagement Rate', value: '73.4%', change: '+8.1%', icon: '🎯' },
    { metric: 'Revenue', value: '$28.7K', change: '+15.2%', icon: '💰' }
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: '21.2K', percentage: 45 },
    { source: 'Direct', visitors: '13.1K', percentage: 28 },
    { source: 'Social Media', visitors: '8.5K', percentage: 18 },
    { source: 'Referrals', visitors: '4.2K', percentage: 9 }
  ];

  const contentPerformance = [
    { title: 'Bitcoin ETF Analysis', views: '15.2K', engagement: '8.4%' },
    { title: 'DeFi Protocol Review', views: '12.8K', engagement: '7.2%' },
    { title: 'Market Outlook 2024', views: '11.5K', engagement: '9.1%' },
    { title: 'Altcoin Opportunities', views: '9.7K', engagement: '6.8%' }
  ];

  const trendingTopics = [
    { topic: 'Bitcoin ETF Inflows', rank: '#1' },
    { topic: 'DeFi 2.0 Protocols', rank: '#2' },
    { topic: 'AI Trading Bots', rank: '#3' },
    { topic: 'Regulatory Updates', rank: '#4' },
    { topic: 'Institutional Adoption', rank: '#5' }
  ];

  const platformFeatures = [
    {
      icon: '⚡',
      title: 'Real-Time Intelligence',
      description: 'AI-powered market analysis and news aggregation from 500+ sources, updated every minute.'
    },
    {
      icon: '🎯',
      title: 'Alpha Signal Detection',
      description: 'Proprietary algorithms identify high-probability opportunities before they hit mainstream media.'
    },
    {
      icon: '🛡️',
      title: 'Fraud Protection',
      description: 'Advanced security measures and scam detection to protect your investments and data.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Deep market insights, portfolio tracking, and performance analytics with ML predictions.'
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Multi-language content and localized insights for markets across 50+ countries.'
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Responsive design and mobile apps for iOS/Android with push notifications.'
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'market':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {articles.map((article) => (
                <div key={article.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.category === 'Institutional' ? 'bg-blue-500/20 text-blue-400' :
                      article.category === 'DeFi' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="flex items-center gap-1 text-orange-400 text-xs">
                        ⭐ Featured
                      </span>
                    )}
                    <button className="ml-auto text-gray-400 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-orange-400 cursor-pointer transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <span>By {article.author}</span>
                      <span>{article.time}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        👁️ {article.views}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏱️ {article.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-4">VIP Intelligence Brief</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get exclusive market insights and alpha signals delivered to your inbox daily.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    Join VIP List
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-4">Trending Now</h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <div key={topic.topic} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{topic.topic}</span>
                      <span className="text-orange-400 font-semibold text-sm">{topic.rank}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <div className="text-center">
                  <h4 className="text-white font-semibold mb-2">Sponsored</h4>
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-lg">
                    <h5 className="font-bold">Premium Trading Platform</h5>
                    <p className="text-sm opacity-90 mt-1">Advanced tools for crypto professionals</p>
                    <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'signals':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Alpha Signals</h3>
              <div className="space-y-4">
                {alphaSignals.map((signal, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          signal.type === 'BUY' ? 'bg-green-500/20 text-green-400' :
                          signal.type === 'WATCH' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {signal.type}
                        </span>
                        <span className="text-xl font-bold text-white">{signal.symbol}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Confidence</div>
                        <div className="text-lg font-bold text-white">{signal.confidence}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-400">Target</div>
                        <div className="text-lg font-semibold text-white">{signal.target}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Timeframe</div>
                        <div className="text-lg font-semibold text-white">{signal.timeframe}</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Analysis</div>
                      <p className="text-gray-300 text-sm">{signal.analysis}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Portfolio Allocation</h3>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {portfolioData.map((item, index) => {
                      const startAngle = portfolioData.slice(0, index).reduce((sum, d) => sum + (d.percentage * 3.6), 0);
                      const endAngle = startAngle + (item.percentage * 3.6);
                      const largeArcFlag = item.percentage > 50 ? 1 : 0;
                      
                      const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                      const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                      const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                      const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                      
                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={item.color}
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">60000</div>
                      <div className="text-sm text-gray-400">Total Value</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {portfolioData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                      <span className="text-white font-semibold">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'analytics':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyticsData.map((item, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-green-400 text-sm font-semibold">{item.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.metric}</div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Traffic Sources</h3>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{source.source}</span>
                        <span className="text-white font-semibold">{source.visitors}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Content Performance</h3>
                <div className="space-y-4">
                  {contentPerformance.map((content, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-medium">{content.title}</div>
                        <div className="text-sm text-gray-400">{content.views} views</div>
                      </div>
                      <div className="text-green-400 font-semibold">{content.engagement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-700/50 backdrop-blur-sm bg-gray-900/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img src={sfhLogo} alt="SFH VIP" className="w-10 h-10" />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  SmartFinanceHub.VIP
                </span>
              </div>
              
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Market Intelligence</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Alpha Signals</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">VIP Community</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">
                🕐 {formatTime(currentTime)} PM
              </div>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                🔔
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                👤
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Where <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Crypto Grit</span>
            <br />
            Meets <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Wealth Intelligence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Elite financial intelligence for crypto entrepreneurs and wealth builders. 
            Real-time market analysis, early signals, and curated insights before the world catches on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300">
              Join VIP Access
            </button>
            <button className="border border-gray-600 text-white font-semibold px-8 py-4 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
              View Sample Intelligence
            </button>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketData.map((data, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{data.symbol}</div>
                    <div className="text-2xl font-bold text-white">{data.price}</div>
                  </div>
                  <div className={`text-lg font-semibold ${data.color}`}>
                    {data.change}
                  </div>
                </div>
                <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full ${data.color.replace('text-', 'bg-')} rounded-full`} style={{width: '75%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <button 
              onClick={() => setActiveTab('market')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'market' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              📈 Market Intelligence
            </button>
            <button 
              onClick={() => setActiveTab('signals')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'signals' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              🎯 Alpha Signals
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'analytics' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              📊 Analytics Dashboard
            </button>
          </div>
          
          {renderTabContent()}
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Platform Features</h2>
            <p className="text-xl text-gray-300">Everything you need to stay ahead in the crypto wealth game</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={sfhLogo} alt="SFH VIP" className="w-8 h-8" />
                <span className="text-lg font-bold text-white">SmartFinanceHub.VIP</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Where crypto grit meets wealth intelligence. Elite financial insights for the next generation of wealth builders.
              </p>
              <div className="flex gap-3 mt-4">
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  📱
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  🐦
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  💬
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Intelligence</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Market Analysis</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Alpha Signals</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">DeFi Reports</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Institutional Moves</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">VIP Access</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Discord</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Telegram</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Events</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 SmartFinanceHub.VIP. All rights reserved. Elite intelligence for elite minds.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartFinanceHub;

