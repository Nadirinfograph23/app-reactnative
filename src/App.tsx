import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  I18nManager,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// تفعيل RTL للعربية
I18nManager.allowRTL(true);

const PRIMARY = '#1a73e8';

function FeatureCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureEmoji}>{emoji}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{desc}</Text>
    </View>
  );
}

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
      <SafeAreaView style={styles.root}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>app</Text>
            <Text style={styles.headerSub}>// ============================================================
// REBUILD_CORE_V5.H - COMPLETE FINAL FIXED VERSION
//
/</Text>
          </View>

          {/* Counter Card */}
          <View style={styles.card}>
            <Text style={styles.cardLabel}>عداد تفاعلي</Text>
            <Text style={styles.counterValue}>{count}</Text>
            <View style={styles.counterRow}>
              <TouchableOpacity
                style={[styles.counterBtn, styles.counterBtnDec]}
                onPress={() => setCount(c => Math.max(0, c - 1))}>
                <Text style={styles.counterBtnText}>−</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.counterBtn, styles.counterBtnInc]}
                onPress={() => setCount(c => c + 1)}>
                <Text style={styles.counterBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Features */}
          <Text style={styles.sectionTitle}>مميزات التطبيق</Text>
          <View style={styles.featuresGrid}>
            <FeatureCard emoji="⚛️" title="React Native" desc="أداء أصلي" />
            <FeatureCard emoji="🎨" title="تصميم حديث" desc="Material UI" />
            <FeatureCard emoji="🌙" title="وضع ليلي" desc="دعم كامل" />
            <FeatureCard emoji="🚀" title="سريع" desc="60fps ثابت" />
          </View>

          {/* Footer */}
          <Text style={styles.footer}>🤖 بُني بواسطة DZ Agent</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0f0f1a' },
  scroll: { padding: 20, paddingBottom: 40 },
  header: {
    backgroundColor: PRIMARY,
    borderRadius: 20,
    padding: 28,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: { color: '#fff', fontSize: 26, fontWeight: '800', textAlign: 'center' },
  headerSub: { color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 6, textAlign: 'center' },
  card: {
    backgroundColor: '#1c1c2e',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  cardLabel: { color: '#888', fontSize: 13, marginBottom: 8 },
  counterValue: { color: '#fff', fontSize: 52, fontWeight: '800', marginBottom: 16 },
  counterRow: { flexDirection: 'row', gap: 16 },
  counterBtn: {
    width: 56, height: 56, borderRadius: 28,
    alignItems: 'center', justifyContent: 'center',
  },
  counterBtnDec: { backgroundColor: '#2d2d3d', borderWidth: 1, borderColor: '#444' },
  counterBtnInc: { backgroundColor: PRIMARY },
  counterBtnText: { color: '#fff', fontSize: 28, fontWeight: '700', lineHeight: 32 },
  sectionTitle: {
    color: '#ccc', fontSize: 16, fontWeight: '700',
    marginBottom: 12, textAlign: 'right',
  },
  featuresGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 28 },
  featureCard: {
    flex: 1, minWidth: '45%',
    backgroundColor: '#1c1c2e',
    borderRadius: 14, padding: 16,
    alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.07)',
  },
  featureEmoji: { fontSize: 28, marginBottom: 8 },
  featureTitle: { color: '#fff', fontSize: 14, fontWeight: '700', marginBottom: 4 },
  featureDesc: { color: '#888', fontSize: 12, textAlign: 'center' },
  footer: { color: '#555', fontSize: 12, textAlign: 'center', marginTop: 8 },
});
